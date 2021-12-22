import Header from "./components/Header";
import Tasks from "./components/Tasks"
import {useState} from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Buy milk',
      day: 'Dec 23 at 13:00',
      done: true
    },
    {
      id: 2,
      text: 'Buy milk',
      day: 'Dec 23 at 13:00',
      done: true
    },
    {
      id: 3,
      text: 'Buy milk',
      day: 'Dec 23 at 13:00',
      done: false
    },
  ])

  return (
    <div className="container">
      <Header title={'Task Tracker'} />
      <Tasks tasks={tasks} />
    </div>
  );

}

export default App;
