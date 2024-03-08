import { readTextFile } from "@tauri-apps/api/fs";
import Papa from "papaparse";

import { desktopDir } from "@tauri-apps/api/path";

/**
 * Read loc information from a file and parse into JSON
 * @returns - A list of loc items
 */
export const parseCSVFile = async () => {
  const desktopPath = await desktopDir();

  const locDataFile = `${desktopPath}/locs.csv`;

  const fileContents = await readTextFile(locDataFile);

  const parsedItemResponse = Papa.parse(fileContents, { header: true });

  return parsedItemResponse;
};
