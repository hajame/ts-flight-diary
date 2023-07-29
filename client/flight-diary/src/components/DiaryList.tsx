import { DiaryData } from "../types/DiaryData";

export const DiaryList = (props: DiaryData) => {
  return (
   <div>
    {props.diaryData.map(diary => (
      <p key={diary.id}>{diary.date}, {diary.weather}, {diary.visibility}, {diary.comment}</p>
    ))}
   </div>
  );
}