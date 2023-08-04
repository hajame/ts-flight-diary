import { DiaryEntry } from "../types/DiaryEntry";

export const diaries = [
  { 
    id: 1,
    date: "2017-01-01",
    weather: "rainy",
    visibility: "poor",
    kind: "sensitive"
  },
  { 
    id: 2,
    date: "2017-02-01",
    weather: "sunny",
    visibility: "good",
    comment: "This was a fun flight!",
    kind: "full"
  }
] as DiaryEntry[]