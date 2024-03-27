import React from "react";

import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)`
  padding: 5px;
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
