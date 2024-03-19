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
      <Box>{item.command}</Box>
      <StyledDivider />
      <Box className="item-description">{item.description}</Box>
      <StyledDivider />
      {item.category && <Box>{item.category}</Box>}
      <StyledDivider />
      <Box>
        <CopyToClipboardButton text={item.command} />
        <SendCommandButton command={item.command} />
      </Box>
    </li>
  );
};

export default ListItem;
