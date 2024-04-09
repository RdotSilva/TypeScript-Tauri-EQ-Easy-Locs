import React from "react";
import { LocItem } from "../../types/LocItem";
import FilterSelectInput from "../FilterSelectInput/FilterSelectInput";
import LocDetails from "../LocDetails/LocDetails";
import { Box, Container, styled } from "@mui/material";
import useFilterItems from "../../hooks/useFilterItems";

export const StyledSelectContainer = styled(Box)`
  display: flex;
`;

interface ListProps {
  items: LocItem[];
}

const ItemListNew: React.FC<ListProps> = ({ items }) => {
  return (
    <Container>
      <StyledSelectContainer></StyledSelectContainer>
      {items.map((item, index) => (
        <LocDetails key={index} item={item} />
      ))}
    </Container>
  );
};

export default ItemListNew;
