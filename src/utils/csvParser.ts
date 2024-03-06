import { readTextFile } from "@tauri-apps/api/fs";
import Papa from "papaparse";

import { desktopDir } from "@tauri-apps/api/path";
import { LocItem } from "../types/LocItem";

/**
 * Read loc information from a file and parse into JSON
 * @returns - A list of loc items
 */
export const parseCSVFile: LocItem[] = async () => {
  const desktopPath = await desktopDir();

  const locDataFile = `${desktopPath}/locs.csv`;

  const fileContents = await readTextFile(locDataFile);

  const parsedItemResponse = Papa.parse(fileContents, { header: true });

  console.log(`Returning Items: ${JSON.stringify(parsedItemResponse.data)}`);
  return parsedItemResponse.data as LocItem[];
};
