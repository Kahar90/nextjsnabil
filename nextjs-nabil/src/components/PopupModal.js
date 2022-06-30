import * as React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoadingComp from "./LoadingComp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PopupModal = ({ index }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    getMoreInfoGames(index);
    setOpen(true);
  };
  const { moreData, getMoreInfoGames, isLoadingMore } =
    useContext(AppContext);

  return (
    <div>
      <Button onClick={handleOpen}>Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {moreData.home_team?.full_name} vs{" "}
              {moreData.visitor_team?.full_name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Score: {moreData.home_team_score} - {moreData.visitor_team_score}
              <br></br>
              Period: {moreData.period} <br></br>
              Status: {moreData.status}
              <br></br>
              Season: {moreData.season}
            </Typography>
            {isLoadingMore ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  visibility: isLoadingMore ? "visible" : "hidden",
                }}
              >
                <LoadingComp></LoadingComp>
              </Box>
            ) : (
              <div></div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PopupModal;
