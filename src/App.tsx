import { useEffect, useState } from "react";
import ItemList from "./components/ItemList/ItemList";
import { appWindow } from "@tauri-apps/api/window";
import { parseCSVFile } from "./utils/csvParser";

import { LocItem } from "./types/LocItem";
import { Box, CircularProgress } from "@mui/material";
import SideNavigationBar from "./components/SideNavigationBar/SideNavigationBar";
import { styled } from "@mui/system";

await appWindow.setAlwaysOnTop(true);

export const StyledContainer = styled(Box)`
  display: flex;
`;

function App() {
  const [items, setItems] = useState<LocItem[]>([]);

  useEffect(() => {
    const fetchParsedCsvData = async () => {
      try {
        const response = await parseCSVFile();
        const locItems = response.data as LocItem[];
        setItems(locItems);
      } catch (error) {
        console.error("Error fetching data:", error);
        setItems([]);
      }
    };

    fetchParsedCsvData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {items === null ? (
          <CircularProgress />
        ) : (
          <StyledContainer>
            <SideNavigationBar items={items} />
            <ItemList items={items} />
          </StyledContainer>
        )}
      </div>
    </div>
  );
}

export default App;
