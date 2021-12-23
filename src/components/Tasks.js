import Task from './Task'
import {PropTypes} from "prop-types";

const Tasks = ({ tasks, onDeleteTask, onSetReminderForTask }) => {

  return (
    <>
      {(
        tasks.map((task) => {
          return <Task key={task.id} task={task} onDelete={onDeleteTask} onSetReminder={onSetReminderForTask}/>
        })
      )}
    </>
  )

}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onSetReminderForTask: PropTypes.func
}

export default Tasks
