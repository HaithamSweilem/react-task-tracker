import Header from "./components/Header";
import Tasks from "./components/Tasks"
import {useState} from "react"
import AddTaskForm from "./components/AddTaskForm";
import Button from "./components/Button";
import ApiTasks from "./api/ApiTasks";

function App() {
  const apiTasks = ApiTasks
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  const onShowAddFormClick = () => {
    setShowAddForm(!showAddForm)
  }

  const onDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const onToggleReminderForTask = async (taskId) => {
    // setTasks(
    //   tasks.map((task) => (task.id === taskId ? {...task, reminder: !task.reminder} : task))
    // );

    const getRes = await apiTasks.get(taskId)
    if (getRes.status === 200) {
      const taskFromServer = getRes.data
      const res = await apiTasks.updateField(taskId, {reminder: !taskFromServer.reminder})
      if (res.status === 200) {
        const updatedTask = res.data
        setTasks(
          tasks.map((task) => (task.id === taskId ? {...task, reminder: updatedTask.reminder} : task))
        );
      } else {
        // TODO: show error: could not set reminder on task
        // ...
      }
    } else {
      // TODO: show error: could not get task to set reminder
      // ...
    }

  }

  const onAddTask = async (task) => {
    // const id = tasks.length + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])

    const res = await apiTasks.create(task)
    if (res.status === 201) {
      setTasks([...tasks, res.data])
    } else {
      // TODO: show error
      // ...
    }

  }

  const testAxios = async () => {
    const id = 1
    const res = await apiTasks.get(id)
    console.info(`GET /${id}: \n apiTasks.get(${id}): `, res.data)

    const task = {
      text: 'text 123',
      day: 'Tuesday 3:00 PM',
      reminder: true,
      done: false
    }

    const resCreate = await apiTasks.create(task)
    console.info(`POST: \n apiTasks.create(${task}): `, resCreate.data)

    const resAll = await apiTasks.get()
    console.info('GET: \n apiTasks.get(): ', resAll.data)

    const idToDelete = resAll.data.length
    const resDelete = await apiTasks.delete(idToDelete)
    console.info(`DELETE: \n apiTasks.delete(${idToDelete}): `, resDelete)

    const updatedTask = {
      id: 7,
      text: 'text 777',
      day: 'Friday 7:00 AM',
      reminder: false,
      done: false
    }
    const resUpdate = await apiTasks.update(updatedTask)
    console.info(`PUT: \n apiTasks.update(${updatedTask}): `, resUpdate)

    const taskIdToPatch = 8
    const patch1 = {reminder: false}
    const resUpdateField1 = await apiTasks.updateField(taskIdToPatch, patch1)
    console.info(`PATCH: \n apiTasks.updateField(${taskIdToPatch}, ${patch1}): `, resUpdateField1)

    const patch2 = {text: 'Hello world!', day: 'Wednesday at 7:77 AM'}
    const resUpdateField2 = await apiTasks.updateField(taskIdToPatch, patch2)
    console.info(`PATCH: \n apiTasks.updateField(${taskIdToPatch}, ${patch2}): `, resUpdateField2)

  }

  return (
    <div className="container">
      <Header title={'Task Tracker'} showAddForm={showAddForm} onShowAddFormClick={onShowAddFormClick} />

      {showAddForm && <AddTaskForm onAddTask={onAddTask} />}

      <Tasks tasks={tasks} onDeleteTask={onDeleteTask} onToggleReminderForTask={onToggleReminderForTask}/>

      {/*<Button color='orange' text='Test Axios' onClick={testAxios} />*/}
    </div>
  );

}

export default App;
