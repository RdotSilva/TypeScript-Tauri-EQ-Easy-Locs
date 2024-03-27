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
    <StyledButton variant="contained" size="small" onClick={copyToClipboard}>
      Copy
    </StyledButton>
  );
};

export default CopyToClipboardButton;
