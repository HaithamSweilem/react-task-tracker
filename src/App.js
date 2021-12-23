import Header from "./components/Header";
import Tasks from "./components/Tasks"
import {useState} from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Buy milk 1',
      day: 'Dec 23 at 13:00',
      done: true,
      reminder: false
    },
    {
      id: 2,
      text: 'Buy milk 2',
      day: 'Dec 23 at 13:00',
      done: true,
      reminder: false
    },
    {
      id: 3,
      text: 'Buy milk 3',
      day: 'Dec 23 at 13:00',
      done: false,
      reminder: false
    },
  ])

  const onDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const onSetReminderForTask = (taskId) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? {...task, reminder: !task.reminder} : task))
    );
  }

  return (
    <div className="container">
      <Header title={'Task Tracker'} />
      <Tasks tasks={tasks} onDeleteTask={onDeleteTask} onSetReminderForTask={onSetReminderForTask} />
    </div>
  );

}

export default App;
