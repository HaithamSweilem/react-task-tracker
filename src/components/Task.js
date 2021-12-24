import { PropTypes } from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggleReminder }) => {

  return (
    <div className={`task ${(task.reminder ? 'reminder' : '')}`} onDoubleClick={(e) => onToggleReminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                 title={'Remove Task'}
                 onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  onToggleReminder: PropTypes.func
}

export default Task
