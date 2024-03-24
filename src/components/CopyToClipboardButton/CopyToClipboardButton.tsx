import React from "react";

import { Button, styled } from "@mui/material";

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return <Button onClick={copyToClipboard}>Copy to Clipboard</Button>;
};

export default CopyToClipboardButton;
