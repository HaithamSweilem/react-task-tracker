const { useState } = require("react");

const AddTaskForm = ({ onAddTask }) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const submitAddForm = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please enter text!')
      return
    }

    onAddTask({
      text: text,
      day: day,
      reminder: reminder
    })

    // reset form
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={submitAddForm}>
      <div className='form-control'>
        <label>Set Text</label>
        <input type='text'
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder='Text'/>
      </div>

      <div className='form-control'>
        <label>Set Day & Time</label>
        <input type='text'
               className='form-control'
               value={day}
               onChange={(e) => setDay(e.target.value)}
               placeholder='Day & Time'/>
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'
               className='form-control'
               checked={reminder}
               value={reminder}
               onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <div className='form-control'>
        <input type='submit' className='btn btn-block'/>
      </div>
    </form>
  )
}

export default AddTaskForm
