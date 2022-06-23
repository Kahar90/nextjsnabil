import { Box } from "@mui/system";

const Footer = () => {
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
        <h1>This is a footer activated by context</h1>
      </Box>
    </div>
  );
};

export default Footer;
