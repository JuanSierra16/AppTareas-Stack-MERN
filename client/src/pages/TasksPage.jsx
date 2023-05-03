import { useEffect } from "react"
import TaskCard from "../components/TaskCard.jsx"
import { useTasks } from "../context/TaskProvider.jsx"

function TaskPage(){
    const {tasks, loadTasks} = useTasks()

    useEffect(() => {
        loadTasks()
    }, [])

    function renderMain(){
        if(tasks.length === 0) return <h1 class="text-2xl font-bold text-cyan-500 mt-8 mb-4">No tasks yet</h1>

        return tasks.map(task => (<TaskCard task={task} key={task.id} />))
    }

    return(
        <div>
            <h1 className="text-5xl text-white font-bold text-center mb-5">Tasks</h1>
            <div className="grid grid-cols-3 gap-2">
                {renderMain()}
            </div>
        </div>
    )
}

export default TaskPage