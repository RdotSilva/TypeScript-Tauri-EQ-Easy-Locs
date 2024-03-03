import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import ItemList from "./components/ItemList";
import { mockItemList } from "./data/mockItems";

function App() {
  const [items, setItems] = useState(mockItemList);

  return (
    <div className="container">
      <h1>Welcome to EQ Easy Locs</h1>

      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default App;
