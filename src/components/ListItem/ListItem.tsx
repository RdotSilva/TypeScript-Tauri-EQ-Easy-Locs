import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";

const ListItem: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <li key={key} className="item">
      <div>{item.zone}</div>
      <div>{item.command}</div>
      <div>{item.description}</div>
      {item.category && <div>{item.category}</div>}
      <CopyToClipboardButton text={item.command} />
      <SendCommandButton command={item.command} />
    </li>
  );
};

export default ListItem;
