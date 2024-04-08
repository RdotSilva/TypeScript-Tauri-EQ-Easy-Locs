import { List, ListItem, ListItemText } from "@mui/material";
import useFilterItems from "../../hooks/useFilterItems";

const SideNavigationBar = ({ items }) => {
  const { uniqueZones, handleZoneChange } = useFilterItems(items);

  return (
    <div>
      <List>
        {uniqueZones.map((zone, index) => (
          <ListItem button key={index} onClick={() => handleZoneChange(zone)}>
            <ListItemText primary={zone} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideNavigationBar;
