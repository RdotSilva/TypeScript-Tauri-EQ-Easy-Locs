import React, { useEffect, useState } from "react";
import { LocItem } from "../../types/LocItem";
import "./ItemList.css";
import FilterSelectInput from "../FilterSelectInput/FilterSelectInput";
import LocDetails from "../LocDetails/LocDetails";
import { Box, List, styled } from "@mui/material";

export const StyledSelectContainer = styled(Box)`
  display: flex;
`;

export const StyledItemListContainer = styled(Box)`
  margin: 20px;
`;

interface ListProps {
  items: LocItem[];
}

const ItemList: React.FC<ListProps> = ({ items }) => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    console.log(items);
  }, []);

  const filteredItems = items.filter((item) => {
    const zoneCondition = !selectedZone || item.zone === selectedZone;
    const categoryCondition =
      !selectedCategory || item.category === selectedCategory;
    return zoneCondition && categoryCondition;
  });

  const uniqueZones = [...new Set(items.map((item) => item.zone))];

  const uniqueCategories = [...new Set(items.map((item) => item.category))]
    .filter((category) => category !== undefined)
    .map((category) => category as string);

  const handleZoneChange = (value: string) => {
    setSelectedZone(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <>
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
      <StyledItemListContainer>
        <List>
          {filteredItems.map((item, index) => (
            <LocDetails key={index} item={item} />
          ))}
        </List>
      </StyledItemListContainer>
    </>
  );
};

export default ItemList;
