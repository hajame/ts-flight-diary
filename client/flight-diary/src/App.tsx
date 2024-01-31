import Header from "./components/Header";
import { DiaryList } from "./components/DiaryList";
import { diaries } from "./services/diaryService";
import { Total } from "./components/Total";
import { DiaryEntry } from "./types/DiaryEntry";
import { useState } from "react";
import { Form } from "./components/Form";

const App = () => {
  new Date().toISOString();
  const [entries, setEntries] = useState<DiaryEntry[]>(diaries)

  const addEntry: addEntryFunc = (entry) => {
    console.log(entry)
    setEntries([... entries, entry]);
  }

  return (
   <div>
    <Header title="Flight Diary"/>
    <Total diaryData={entries} />
    <Form addEntry={addEntry} />
    <DiaryList diaryData={entries} />
   </div>
  );
}

export type addEntryFunc = (entry: DiaryEntry) => void;

export default App;
