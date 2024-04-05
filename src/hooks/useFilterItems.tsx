import { useState } from "react";
import { LocItem } from "../types/LocItem";

const useFilterItems = (items: LocItem[]) => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const uniqueCategories = [...new Set(items.map((item) => item.category))]
    .filter((category) => category !== undefined)
    .map((category) => category as string);

  const uniqueZones = [...new Set(items.map((item) => item.zone))];

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
    uniqueCategories,
    uniqueZones,
  };
};

export default useFilterItems;
