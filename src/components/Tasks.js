import Task from './Task'
import {PropTypes} from "prop-types";

const Tasks = ({ tasks, onDeleteTask, onSetReminderForTask }) => {

  const renderElement = () => {

    if (tasks.length === 0) {

      return <>No Tasks To Show</>

    } else {
    
      return tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDeleteTask} onSetReminder={onSetReminderForTask}/>
      })

    }
  }

  return (
    <>{renderElement()}</>
  )

}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onSetReminderForTask: PropTypes.func
}

export default Tasks
