import Task from './Task'
import {PropTypes} from "prop-types";

const Tasks = ({ tasks, onDeleteTask, onToggleReminderForTask }) => {

  const renderElement = () => {

    if (tasks.length === 0) {

      return <>No Tasks To Show</>

    } else {

      return tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDeleteTask} onToggleReminder={onToggleReminderForTask}/>
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
  onToggleReminderForTask: PropTypes.func
}

export default Tasks
