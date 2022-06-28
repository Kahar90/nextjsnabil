import { Box } from "@mui/system";
import styles from "./../../styles/footer.module.scss";

const FooterMobile = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          bottom: "0%",
          width: "100%",
        }}
      >
        <div className={styles.mobile}>
          <h3 className={styles.h1}> Footer for Mobile </h3>
        </div>
      </Box>
    </div>
  );
};

export default FooterMobile;
