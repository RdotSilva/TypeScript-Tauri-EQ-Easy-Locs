import { Button, List } from "@mui/material";

const SideNavigationBar = ({ zones, onChangeHandler }) => {
  return (
    <div>
      <List>
        {zones.map((zone, index) => (
          <Button onClick={() => onChangeHandler(zone)}>{zone}</Button>
        ))}
      </List>
    </div>
  );
};

export default SideNavigationBar;
