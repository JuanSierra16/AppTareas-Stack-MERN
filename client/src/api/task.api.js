import axios from 'axios'

export const getTasksRequest = async (user_id) => {
    const response = await axios.get(`http://localhost:4000/tasks/${user_id}`);
    return response.data;
  };

export const createTaskRequest = async(task) =>
    await axios.post('http://localhost:4000/tasks', task)

export const deleteTaskRequest = async(id) => 
  await axios.delete(`http://localhost:4000/tasks/${id}`)

export const getTaskRequest = async(id) => {
  return await axios.get(`http://localhost:4000/tasks/task/${id}`)
}

export const updateTaskRequest = async(id, newFields) => {
  return await axios.put(`http://localhost:4000/tasks/${id}`, newFields)
}

export const toggleTaskDoneRequest = async(id, done) => {
  await axios.put(`http://localhost:4000/tasks/${id}`, {done})
}