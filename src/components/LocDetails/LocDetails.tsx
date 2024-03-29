import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";
import { Box, Divider, ListItem, styled } from "@mui/material";

const StyledContainer = styled(Box)`
  border: solid;
  display: inline-grid;
  grid-template-rows: repeat(4, auto);
  margin: 5px;
`;

const StyledItemZone = styled(Box)`
  font-weight: bold;
  color: #007bff;
`;

const LocDetails: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <StyledContainer>
      <ListItem key={key}>
        <StyledItemZone>{item.zone}</StyledItemZone>
      </ListItem>
      <Divider />
      <ListItem key={key}>
        <Box>{item.command}</Box>
      </ListItem>
      <Divider />
      <ListItem key={key}>
        <Box>{item.description}</Box>
      </ListItem>
      <Divider />
      <ListItem key={key}>
        <Box>{item.category}</Box>
      </ListItem>
      <Divider />
      <ListItem key={key}>
        <Box>
          <CopyToClipboardButton text={item.command} />
          <SendCommandButton command={item.command} />
        </Box>
      </ListItem>
    </StyledContainer>
  );
};

export default LocDetails;
