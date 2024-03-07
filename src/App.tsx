import { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import { appWindow } from "@tauri-apps/api/window";
import { parseCSVFile } from "./utils/csvParser";

import "../src/components/ItemList/ItemList.css";
import { LocItem } from "./types/LocItem";

await appWindow.setAlwaysOnTop(true);

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
        {items === null ? <p>Loading...</p> : <ItemList items={items} />}
      </div>
    </div>
  );
}

export default App;
