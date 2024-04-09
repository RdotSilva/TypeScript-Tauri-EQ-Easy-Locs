import { Button, List } from "@mui/material";
import useFilterItems from "../../hooks/useFilterItems";

const SideNavigationBar = ({ handler }) => {
  const { uniqueZones } = useFilterItems(items);

  return (
    <div>
      <List>
        {uniqueZones.map((zone, index) => (
          <Button onClick={() => handler(zone)}>{zone}</Button>
        ))}
      </List>
    </div>
  );
};

export default SideNavigationBar;
