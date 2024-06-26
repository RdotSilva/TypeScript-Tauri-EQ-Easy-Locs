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

const ItemList: React.FC<ListProps> = ({ items }) => {
  const {
    filteredItems,
    selectedZone,
    selectedCategory,
    handleZoneChange,
    handleCategoryChange,
    uniqueCategories,
    uniqueZones,
  } = useFilterItems(items);

  return (
    <Container>
      <StyledSelectContainer>
        <FilterSelectInput
          uniqueOptions={uniqueZones}
          selectedValue={selectedZone}
          label="Zone"
          onSelectChange={handleZoneChange}
        />
        <FilterSelectInput
          uniqueOptions={uniqueCategories}
          selectedValue={selectedCategory}
          label="Category"
          onSelectChange={handleCategoryChange}
        />
      </StyledSelectContainer>
      {filteredItems.map((item, index) => (
        <LocDetails key={index} item={item} />
      ))}
    </Container>
  );
};

export default ItemList;
