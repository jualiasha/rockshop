import React from "react";
import { Grid, SnackbarContent, Icon, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeMessage } from "../store/actions/messageactions";

const Message = () => {
  const { message } = useSelector((state) => state.message);
  const { messageText, bgColor } = message;
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(removeMessage({ messageText: "", bgColor: "" }));
  };

  return (
    <Grid container={true} justify="center" className="message-container">
      <Grid item={true} xs={11} sm={8} md={6}>
        <SnackbarContent
          className={bgColor}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className="message">
              <Icon className="icon " />
              {messageText}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={closeHandler}
            >
              <CloseIcon className="icon" />
            </IconButton>,
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Message;
