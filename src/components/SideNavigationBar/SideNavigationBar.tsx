import { List } from "@mui/material";
import LocDetails from "../LocDetails/LocDetails";

const SideNavigationBar = ({ items }) => {
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <LocDetails key={index} item={item} />
        ))}
      </List>
    </div>
  );
};

export default SideNavigationBar;
