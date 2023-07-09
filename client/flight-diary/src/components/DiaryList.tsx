export interface DiaryEntry {
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

interface DiaryData {
  diaryData: DiaryEntry[]
}

export const DiaryList = (props: DiaryData) => {
  return (
   <div>
    {props.diaryData.map(diary => (
      <p key={diary.id}>{diary.date}, {diary.weather}, {diary.visibility}, {diary.comment}</p>
    ))}
   </div>
  );
}