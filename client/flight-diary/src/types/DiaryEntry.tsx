interface DiaryEntryBase {
  id: number;
  date: string;
  weather: string;
  visibility: string;
}

interface DiaryEntrySensitive extends DiaryEntryBase {
  kind: "sensitive"
}

interface DiaryEntryFull extends DiaryEntryBase {
  comment: string;
  kind: "full"
}

interface DiaryEntryBirds extends DiaryEntryBase {
  kind: "birds";
  birds: string[];
}

export type DiaryEntry = DiaryEntrySensitive | DiaryEntryFull | DiaryEntryBirds
