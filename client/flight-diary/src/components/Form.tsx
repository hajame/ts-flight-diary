import { DiaryEntry } from "../types/DiaryEntry";
import { addEntryFunc } from "../App";
import { useState } from "react";

export const Form = (props: {addEntry: addEntryFunc}) => {

  const randomId = (): number => Math.floor(Math.random() * 123456);

  const [nextEntry, setNextEntry] = useState<DiaryEntry>({
    id: randomId(),
    date: new Date().toISOString(),
    weather: "weather",
    visibility: "viz",
    comment: "comment",
    kind: "full"
  })

  return (
      <div>
        <form onSubmit={
          (e) => {
            e.preventDefault()
            props.addEntry({...nextEntry, id: randomId() })
          }
        }>
          <input
              value={nextEntry.weather}
              onChange={
                (event) =>
                  setNextEntry({...nextEntry, weather: event.target.value})
                }
          />
          <button type='submit'>add new entry</button>
        </form>
      </div>
  )
}