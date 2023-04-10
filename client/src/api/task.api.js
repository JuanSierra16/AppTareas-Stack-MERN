import axios from 'axios'

export const getTasksRequest = async (user_id) => {
    const response = await axios.get(`http://localhost:4000/tasks/${user_id}`);
    return response.data;
  };

export const createTaskRequest = async(task) =>
    await axios.post('http://localhost:4000/tasks', task)