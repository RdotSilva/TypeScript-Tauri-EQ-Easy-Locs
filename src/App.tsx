import { useEffect, useState } from "react";

import { appWindow } from "@tauri-apps/api/window";
import { parseCSVFile } from "./utils/csvParser";

import { LocItem } from "./types/LocItem";
import { Box, CircularProgress } from "@mui/material";

import { styled } from "@mui/system";
import ItemListNew from "./components/ItemListNew/ItemListNew";

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
            <ItemListNew items={items} />
          </StyledContainer>
        )}
      </div>
    </div>
  );
}

export default App;
