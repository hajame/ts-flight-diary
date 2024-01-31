import Header from "./components/Header";
import { DiaryList } from "./components/DiaryList";
import { diaries } from "./services/diaryService";
import { Total } from "./components/Total";
import { DiaryEntry } from "./types/DiaryEntry";

const App = () => {
  const diaryList: DiaryEntry[] = diaries;
  return (
   <div>
    <Header title="Flight Diary"/>
    <Total diaryData={diaryList} />
    <DiaryList diaryData={diaryList} />
   </div>
  );
}

export default App;
