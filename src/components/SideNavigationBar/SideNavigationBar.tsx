import { List, ListItem, ListItemText } from "@mui/material";
import useFilterItems from "../../hooks/useFilterItems";

const SideNavigationBar = ({ items }) => {
  const { uniqueZones } = useFilterItems(items);

  return (
    <div>
      <List>
        {uniqueZones.map((zone, index) => (
          <ListItem key={index} onClick={() => console.log("TODO")}>
            <ListItemText primary={zone} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideNavigationBar;
