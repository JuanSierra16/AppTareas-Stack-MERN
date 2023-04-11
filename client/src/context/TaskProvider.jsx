import { useContext, useState} from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from "../api/task.api";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTasks must be used within a TaskContextProvider")
    }
    return context;
}

export const TaskContextProvider = ({userId, children}) => {
    
    const [tasks, setTasks] = useState([])
    
    async function loadTasks(){
        if(userId){
            const response = await getTasksRequest(userId)
            setTasks(response)
        } else {
            setTasks([])
        }
    }

    const deleteTask = async(id) => {
        try {
            const response = await deleteTaskRequest(id)
            console.log(response)
            setTasks(tasks.filter(task => task.id !== id))
        }
        catch(error){
            console.log(error)
        }
    }

    const createTask = async(task) => {
        try{
            const response = await createTaskRequest(task)
            //setTasks([...tasks, response.data]) No es necesario porque al cargar la pagina TasksPage ya se piden de nuevo las tareas, pero esta es una forma de agreagar las tareas al arreglo
            console.log(response)
        }
        catch(error){
            console.error(error)
        }
    }
    
    return(
        <TaskContext.Provider value={{tasks, loadTasks, userId, deleteTask, createTask}}>
            {children}
        </TaskContext.Provider>
    )
}
  
  
  
  
  
  