import { Box } from "@mui/system";
import styles from "./../../styles/footer.module.scss";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          bottom: "0%",
          width: "100%",
          fontSize: { xs: "small", md: "medium" },
          display: { xs: "none", md: "initial" },
        }}
      >
        <div className={styles.footer}>
          <h1 className={styles.h1}> Footer </h1>
        </div>
      </Box>
    </div>
  );
};
export default Footer;
