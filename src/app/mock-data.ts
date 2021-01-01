import { DataCard } from './models/data-card';

export const DATACARDS: DataCard[] = [
  {
    id: "1",
    rev: "1",
    type: "data",
    category: "credit card",
    name: "Royal Carribean",
    allProps: new Map<string, string>(
      [
          ["issuer name", "bank of america"],
          ["url", "bankofamerica.com"]
      ]
    )
  },
  {
    id: "2",
    rev: "1",
    type: "data",
    category: "credit card",
    name: "BJs - Steve",
    allProps: new Map<string, string>(
      [
          ["issuer name", "synchrony"],
          ["url", "mybjsrewardscard.com"]
      ]
    )
  }
];