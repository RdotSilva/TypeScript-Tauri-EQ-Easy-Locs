import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)`
  margin-top: 5px;
  padding: 5px 10px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: orange;
`;

interface SendCommandButtonProps {
  command: string;
}

const SendCommandButton: React.FC<SendCommandButtonProps> = ({ command }) => {
  const sendCommandToWindow = async () => {
    try {
      await invoke("send_command_to_window", { command });
    } catch (error) {
      console.error("Error sending command to EverQuest:", error);
    }
  };

  return (
    <StyledButton
      variant="contained"
      size="small"
      onClick={sendCommandToWindow}
    >
      Send
    </StyledButton>
  );
};

export default SendCommandButton;
