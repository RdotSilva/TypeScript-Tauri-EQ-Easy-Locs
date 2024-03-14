import React from "react";

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return <button onClick={copyToClipboard}>Copy to Clipboard</button>;
};

export default CopyToClipboardButton;
