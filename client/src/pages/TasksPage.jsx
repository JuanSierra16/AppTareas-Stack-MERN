import { useEffect, useState } from "react"
import {getTasksRequest} from '../api/task.api.js'
import TaskCard from "../components/TaskCard.jsx"

function TaskPage({userId}){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks(){
            const response = await getTasksRequest(userId)
            setTasks(response)
        }
        loadTasks()
    }, [])

    return(
        <div>
            <h1>
                Tasks
            </h1>

            {
                tasks.map(task => (
                    <TaskCard task={task} key={task.id} />
                ))
            }

        </div>
    )
}

export default TaskPage