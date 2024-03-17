import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";
import "./ListItem.css";
import { Divider } from "@mui/material";

const ListItem: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <li key={key} className="item">
      <div className="item-zone">{item.zone}</div>
      <Divider />
      <div className="item-command">{item.command}</div>
      <Divider />
      <div className="item-description">{item.description}</div>
      <Divider />
      {item.category && <div className="item-category">{item.category}</div>}
      <Divider />
      <CopyToClipboardButton text={item.command} />
      <SendCommandButton command={item.command} />
    </li>
  );
};

export default ListItem;
