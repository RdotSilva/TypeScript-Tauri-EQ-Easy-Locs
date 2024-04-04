import { useState } from "react";
import { LocItem } from "../types/LocItem";

const useFilterItems = (items: LocItem[]) => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filterItems = (items: LocItem[]) => {
    return items.filter((item) => {
      const zoneCondition = !selectedZone || item.zone === selectedZone;
      const categoryCondition =
        !selectedCategory || item.category === selectedCategory;
      return zoneCondition && categoryCondition;
    });
  };

  const handleZoneChange = (value: string) => {
    setSelectedZone(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return {
    filteredItems: filterItems(items),
    selectedZone,
    selectedCategory,
    handleZoneChange,
    handleCategoryChange,
  };
};

export default useFilterItems;
