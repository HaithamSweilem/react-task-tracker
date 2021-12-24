import Axios from "./Axios";

const ApiTasks = {

  get: async (id = null) => {

    // list all tasks
    if (!id) {
      return Axios.get('tasks')
    }

    // get task by id
    return Axios.get(`tasks/${id}`)

  },

  create: async (task) => {
    return Axios.post('tasks', task)
  },

  delete: async (taskId) => {
    return Axios.delete(`tasks/${taskId}`)
  },

  update: async (task) => {
    return Axios.put(`tasks/${task.id}`, task)
  },

  updateField: async (id, patch) => {
    return Axios.patch(`tasks/${id}`, patch)
  }
}

export default ApiTasks
