import Header from "./components/Header";
import { DiaryList } from "./components/DiaryList";
import { diaries } from "./services/diaryService";

const App = () => {
  return (
   <div>
    <Header title="Flight Diary"/>
    <DiaryList diaryData={diaries} />
   </div>
  );
}

export default App;
