import React from "react";
import { LocItem } from "../../types/LocItem";
import SendCommandButton from "../SendCommandButton/SendCommandButton";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";

const ListItem: React.FC<{ item: LocItem; key: string | number }> = ({
  item,
  key,
}) => {
  return (
    <li key={key} className="item">
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
  );
};

export default ListItem;
