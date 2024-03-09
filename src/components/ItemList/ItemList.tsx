import React, { useEffect, useState } from "react";
import { LocItem } from "../../types/LocItem";
import "./ItemList.css";
import SendCommandButton from "../SendCommandButton/SendCommandButton";

interface ListProps {
  items: LocItem[];
}

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return <button onClick={copyToClipboard}>Copy to Clipboard</button>;
};

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
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <>
      <div className="select-container">
        <div className="select-group">
          <label htmlFor="zoneSelector">Zone:</label>
          <select
            id="zoneSelector"
            onChange={(e) => setSelectedZone(e.target.value)}
            value={selectedZone || ""}
          >
            <option value="">All Zones</option>
            {uniqueZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>
        <div className="select-group">
          <label htmlFor="categorySelector">Category:</label>
          <select
            id="categorySelector"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory || ""}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="item-list">
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index} className="item">
              <div>
                <strong>Zone:</strong> {item.zone}
              </div>
              <div>
                <strong>Command:</strong> {item.command}
              </div>
              <div>
                <strong>Description:</strong> {item.description}
              </div>
              {item.category && (
                <div>
                  <strong>Category:</strong> {item.category}
                </div>
              )}
              <CopyToClipboardButton text={item.command} />
              <SendCommandButton command={item.command} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemList;
