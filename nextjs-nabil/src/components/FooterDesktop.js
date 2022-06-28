import { Box } from "@mui/system";
import styles from "./../../styles/footer.module.scss";
const FooterDesktop = () => {
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
        <h1 className={styles.h1}> Footer for Desktop </h1>
      </Box>
    </div>
  );
};

export default FooterDesktop;
