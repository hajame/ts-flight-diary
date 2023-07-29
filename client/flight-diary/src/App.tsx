import Header from "./components/Header";
import { DiaryList } from "./components/DiaryList";
import { diaries } from "./services/diaryService";
import { Total } from "./components/Total";

const App = () => {
  return (
   <div>
    <Header title="Flight Diary"/>
    <Total diaryData={diaries} />
    <DiaryList diaryData={diaries} />
   </div>
  );
}

export default App;
