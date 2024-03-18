import React, { useEffect, useState } from "react";
import { LocItem } from "../../types/LocItem";
import "./ItemList.css";
import FilterSelectInput from "../FilterSelectInput/FilterSelectInput";
import ListItem from "../ListItem/ListItem";

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
      <div className="select-container">
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
      </div>
      <div className="item-list">
        <ul>
          {filteredItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemList;
