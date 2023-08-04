interface DiaryEntryBase {
  id: number;
  date: string;
}

interface DiaryEntrySensitive extends DiaryEntryBase {
  weather: string;
  visibility: string;
  kind: "sensitive"
}

interface DiaryEntryFull extends DiaryEntryBase {
  weather: string;
  visibility: string;
  comment: string;
  kind: "full"
}

export type DiaryEntry = DiaryEntrySensitive | DiaryEntryFull
