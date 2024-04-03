import { LocItem } from "../types/LocItem";

export const mockItemList: LocItem[] = [
  {
    id: 1,
    zone: "Sebilis",
    command: "#zone sebilis 209 -1623 -122",
    description: "Main entrance",
    category: "hunt",
  },
  {
    id: 2,
    zone: "Sebilis",
    command: "#zone sebilis 209 -1623 -122",
    description: "South area",
    category: "hunt",
  },
  {
    id: 3,
    zone: "Sebilis",
    command: "#zone sebilis -758 -1917 -130",
    description: "Trakanon boss",
    category: "plat",
  },
  {
    id: 4,
    zone: "Guild Lobby",
    command: "#zone guildlobby -74 424 10",
    description: "Merchant Drake",
    category: "npc",
  },
  {
    id: 5,
    zone: "Guild Lobby",
    command: "#zone guildlobby -74 424 10",
    description: "Merchant",
    category: "vendor",
  },
];
