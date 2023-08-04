import { DiaryData } from "../types/DiaryData";

export const DiaryList = (props: DiaryData) => {
  
  const entries = props.diaryData.filter(
    entry => (entry.kind === "full" || "sensitive"));
  
  return (
   <div>
    {entries.map(entry => (
      <p key={entry.id}>
        {entry.date}, {entry.weather}, {entry.visibility}
        {entry.kind === "full" && `, ${entry.comment}`}
      </p>
    ))}
   </div>
  );
}