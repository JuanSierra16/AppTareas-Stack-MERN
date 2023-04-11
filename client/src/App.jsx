import {Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import TaskPage from './pages/TasksPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'
import { TaskContextProvider } from './context/TaskProvider'

import Navbar from './components/Navbar'
import UserForm from './pages/UserForm'
import LoginForm from './pages/LoginForm'

function App() {
  const [userId, setUserId] = useState(null); // estado para almacenar el userId

  const handleLogin = (id) => {
    setUserId(id); // actualiza el userId cuando se inicie sesión
  };

  return (
    <TaskContextProvider userId={userId}>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginForm onLogin={handleLogin}/>} />
        <Route path='/register' element={<UserForm />} />
        <Route path='/taskspage' element={<TaskPage />} />/*Pagina de entrada
        <Route path='/new' element={<TaskForm userId={userId}/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </TaskContextProvider>
  )
}

export default App
