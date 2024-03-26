import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";
import { Box, Divider, ListItem, styled } from "@mui/material";

const StyledListItem = styled(ListItem)`
  border: solid;
  margin: 0;
  flex-basis: calc(
    33.33% - 20px
  ); /* Set initial size for each item (adjust margin as needed) */
  margin-right: 20px; /* Adjust the margin between items */
  margin-bottom: 20px; /* Adjust the margin between rows */
`;

const StyledDivider = styled(Divider)`
  margin: 10px 0;
`;

export const StyledItemZone = styled(Box)`
  font-weight: bold;
  color: #007bff;
`;

const LocDetails: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <StyledListItem key={key} className="item">
      <StyledItemZone>{item.zone}</StyledItemZone>
      <StyledDivider />
      <Box>{item.command}</Box>
      <StyledDivider />
      <Box>{item.description}</Box>
      <StyledDivider />
      {item.category && <Box>{item.category}</Box>}
      <StyledDivider />
      <Box>
        <CopyToClipboardButton text={item.command} />
        <SendCommandButton command={item.command} />
      </Box>
    </StyledListItem>
  );
};

export default LocDetails;
