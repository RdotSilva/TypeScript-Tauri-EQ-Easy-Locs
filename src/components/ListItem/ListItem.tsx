import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";
import "./ListItem.css";
import { Box, Divider, styled } from "@mui/material";

const StyledDivider = styled(Divider)`
  margin: 5px 0;
`;

export const StyledItemZone = styled(Box)`
  font-weight: bold;
  color: #007bff;
`;

const ListItem: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <li key={key} className="item">
      <StyledItemZone>{item.zone}</StyledItemZone>
      <StyledDivider />
      <div className="item-command">{item.command}</div>
      <StyledDivider />
      <div className="item-description">{item.description}</div>
      <StyledDivider />
      {item.category && <div className="item-category">{item.category}</div>}
      <StyledDivider />
      <CopyToClipboardButton text={item.command} />
      <SendCommandButton command={item.command} />
    </li>
  );
};

export default ListItem;
