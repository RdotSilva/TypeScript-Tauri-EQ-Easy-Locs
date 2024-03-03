import React, { useEffect } from "react";
import { LocItem } from "../types/LocItem";

interface ListProps {
  items: LocItem[];
}

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    // You can add a notification or any other feedback here
  };

  return <button onClick={copyToClipboard}>Copy to Clipboard</button>;
};

const ItemList: React.FC<ListProps> = ({ items }) => {
  useEffect(() => {
    console.log(items);
  }, []);
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
