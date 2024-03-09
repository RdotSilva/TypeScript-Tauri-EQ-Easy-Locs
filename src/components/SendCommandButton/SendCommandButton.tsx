import React from "react";
import { invoke } from "@tauri-apps/api/tauri";

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

  return <button onClick={sendCommandToWindow}>Send to EverQuest</button>;
};

export default SendCommandButton;
