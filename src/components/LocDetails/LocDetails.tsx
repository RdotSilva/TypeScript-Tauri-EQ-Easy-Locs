import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";
import { Box, Divider, ListItem, styled } from "@mui/material";

const StyledContainer = styled(Box)`
  border: solid;
  display: flex;
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
    <StyledContainer>
      <ListItem key={key}>
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
      </ListItem>
    </StyledContainer>
  );
};

export default LocDetails;
