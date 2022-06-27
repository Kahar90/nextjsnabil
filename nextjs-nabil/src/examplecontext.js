import React, {
    useEffect,
    useState,
    createContext,
    useReducer,
    useCallback,
    useContext,
  } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {useApolloClient} from '@apollo/client';
  import {
    LOGIN,
    REGISTER,
    GET_USER_DATA,
    REFRESH_TOKEN,
  } from '../queries/userQuery';
  import {reducer, initialState} from './user-reducer';
  import {
    getActivePurchase,
    getActiveSubscription,
    useBackgroundService,
  } from '../utils';
  import jwtDecode from 'jwt-decode';
  
  export const UserContext = createContext(null);
  
  export const useAuth = () => {
    return useContext(UserContext);
  };
  
  const UserProvider = props => {
    const {children} = props;
    const client = useApolloClient();
    const [isFetchingUser, setIsFetchingUser] = useState();
    const [user, setUser] = useState();
    const [iapPurchases, setIapPurchases] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isPremium, setIsPremium] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [syncSubscriptions] = useBackgroundService();
  
    useEffect(() => {
      fetchData();
      validateToken();
      checkSubscriptionStatus();
      syncSubscriptions();
    }, []);
  
    const refetchUserContext = () => {
      fetchData();
      validateToken();
      checkSubscriptionStatus();
      syncSubscriptions();
    };
  
    const checkSubscriptionStatus = async () => {
      // For now this only checks at start which is sufficient
      try {
        let hasPremiumPurchase = await getActivePurchase();
        if (hasPremiumPurchase) {
          setIsPremium(true);
        }
  
        // let hasActiveSubscription = await getActiveSubscription();
        // if (hasActiveSubscription) {
        //   setIsPremium(true);
        // }
      } catch (error) {
        console.warn('error:', error);
      }
  
      setIsFirstLoad(false);
    };
  
    const signIn = async ({username, password}) => {
      const response = await client.mutate({
        mutation: LOGIN,
        variables: {
          username: username,
          password: password,
        },
      });
  
      if (response?.data?.login?.uid) {
        console.log('::SIGN IN SUCCESSFUL::');
  
        handlePostLogin(response?.data?.login);
      }
  
      return response?.data?.login;
    };
  
    const register = async ({username, password}) => {
      const response = await client.mutate({
        mutation: REGISTER,
        variables: {
          username: username,
          password: password,
        },
      });
  
      if (response?.data?.registerMobile?.uid) {
        console.log('::REGISTRATION SUCCESSFUL::');
        handlePostLogin(response?.data?.registerMobile);
      }
  
      return response?.data?.registerMobile;
    };
  
    const handlePostLogin = async obj => {
      await AsyncStorage.setItem('@accessToken', obj?.accessToken);
      await AsyncStorage.setItem('@refreshToken', obj?.refreshToken);
      await AsyncStorage.setItem('@userId', obj?.uid);
  
      await fetchData();
    };
  
    const signOut = async () => {
      await AsyncStorage.removeItem('@accessToken');
      await AsyncStorage.removeItem('@refreshToken');
      await AsyncStorage.removeItem('@userId');
      setUser(null);
    };
  
    const validateToken = async () => {
      const accessToken = await AsyncStorage.getItem('@accessToken');
      const refreshToken = await AsyncStorage.getItem('@refreshToken');
      // console.log('refreshToken:', jwtDecode(refreshToken));
      const tokenDecoded = jwtDecode(accessToken);
      const currentTimestamp = Date.now().valueOf() / 1000;
      console.log('Token expiring in:', tokenDecoded.exp - currentTimestamp);
  
      if (
        refreshToken &&
        (!tokenDecoded || currentTimestamp > tokenDecoded.exp)
      ) {
        // token expired
        // console.warn('expired');
        getRefreshedToken();
      } else if (tokenDecoded.exp - currentTimestamp > 0) {
        // If token not expired, run silent refresh
        // console.warn('not expired');
        setTimeout(
          getRefreshedToken,
          (tokenDecoded.exp - currentTimestamp) * 1000,
        );
      }
    };
  
    const getRefreshedToken = async () => {
      const refreshToken = await AsyncStorage.getItem('@refreshToken');
      // Token has expired, request a new one
      const response = await client.query({
        query: REFRESH_TOKEN,
        variables: {refreshToken},
      });
  
      console.log('getRefreshedToken:', response);
  
      if (response?.data?.refreshToken?.refresh_token) {
        await AsyncStorage.setItem(
          '@accessToken',
          response?.data?.refreshToken?.access_token,
        );
        await AsyncStorage.setItem(
          '@refreshToken',
          response?.data?.refreshToken?.refresh_token,
        );
  
        setTimeout(
          getRefreshedToken,
          response?.data?.refreshToken?.tokenExpiresIn * 1000,
        );
      } else {
        signOut();
      }
    };
  
    const fetchData = useCallback(async () => {
      let userUid = await AsyncStorage.getItem('@userId');
      setIsFetchingUser(true);
  
      if (userUid) {
        const response = await client.query({
          query: GET_USER_DATA,
          variables: {
            uid: userUid,
          },
        });
        console.log('GET_USER_DATA:', response);
        // console.log('getIAP punya :: ', response?.data?.getIap)
        if (response?.data?.getUser?.uid) {
          // userUid = response?.data?.getUser?.uid;
          setUser(response?.data?.getUser);
        }
        if (response?.data?.getIAP?.length > 0) {
          setIapPurchases(response?.data?.getIAP);
          // console.log('response?.getIap ::: ', response?.data?.getIAP);
        }
      }
  
      setIsFetchingUser(false);
    }, [client]);
  
    const refreshUser = async () => {
      fetchData();
    };
  
    const changeIsPremium = value => {
      setIsPremium(value);
    };
  
    return (
      <UserContext.Provider
        value={{
          user,
          iapPurchases,
          isFetchingUser,
          isFirstLoad,
          state,
          dispatch,
          refreshUser,
          signIn,
          signOut,
          register,
          isPremium,
          changeIsPremium,
          refetchUserContext,
        }}>
        {children}
      </UserContext.Provider>
    );
  };