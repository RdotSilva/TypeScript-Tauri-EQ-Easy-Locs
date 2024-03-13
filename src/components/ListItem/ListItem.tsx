import React from "react";
import { LocItem } from "../../types/LocItem";

const ListItem: React.FC<{ item: LocItem }> = ({ item }) => {
  return (
    <li className="item">
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
    </li>
  );
};

export default ListItem;
