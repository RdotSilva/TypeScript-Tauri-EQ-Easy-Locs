import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";
import "./ListItem.css";

const ListItem: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <li key={key} className="item">
      <div className="item-zone">{item.zone}</div>
      <hr className="divider" />
      <div className="item-command">{item.command}</div>
      <hr className="divider" />
      <div className="item-description">{item.description}</div>
      <hr className="divider" />
      {item.category && <div className="item-category">{item.category}</div>}
      <hr className="divider" />
      <CopyToClipboardButton text={item.command} />
      <SendCommandButton command={item.command} />
    </li>
  );
};

export default ListItem;
