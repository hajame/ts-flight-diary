import { DiaryEntry } from "../types/DiaryEntry";

export const diaries: DiaryEntry[] = [
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
    comment: "This was a FUN flight!",
    kind: "full"
  },
  {
    id: 3,
    date: "2017-01-01",
    weather: "rainy",
    visibility: "miserable",
    kind: "sensitive"
  },
  {
    id: 4,
    date: "2017-01-01",
    weather: "sunny",
    visibility: "good",
    kind: "birds",
    birds: ["magpie", "crow", "hawk"]
  },
]