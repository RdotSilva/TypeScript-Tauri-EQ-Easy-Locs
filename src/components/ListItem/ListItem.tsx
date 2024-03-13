import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return <button onClick={copyToClipboard}>Copy to Clipboard</button>;
};

const ListItem: React.FC<{ item: LocItem }> = ({ item }) => {
  return (
    <li className="item">
      <div>
        <strong>Zone:</strong> {item.zone}
      </div>
      <div>
        <strong>Command:</strong> {item.command}
      </div>
      <div>
        <strong>Description:</strong> {item.description}
      </div>
      {item.category && (
        <div>
          <strong>Category:</strong> {item.category}
        </div>
      )}
      <CopyToClipboardButton text={item.command} />
      <SendCommandButton command={item.command} />
    </li>
  );
};

export default ListItem;
