import { DiaryData } from "../types/DiaryData";

export const Total = (props: DiaryData) => {
  return (
   <p>
    {`Number of diary entries: ${props.diaryData.length}`}
   </p>
  );
}