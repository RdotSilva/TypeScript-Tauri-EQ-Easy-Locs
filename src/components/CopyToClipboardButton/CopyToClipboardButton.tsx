import React from "react";

import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)`
  margin-top: 5px;
  padding: 5px 10px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: orange;
`;

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <StyledButton onClick={copyToClipboard}>Copy to Clipboard</StyledButton>
  );
};

export default CopyToClipboardButton;
