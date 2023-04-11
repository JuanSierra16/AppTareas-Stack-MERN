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

    function renderMain(){
        if(tasks.length === 0) return <h1>No tasks yet</h1>

        return tasks.map(task => (<TaskCard task={task} key={task.id} />))
    }

    return(
        <div>
            <h1>
                Tasks
            </h1>

            {renderMain()}

        </div>
    )
}

export default TaskPage