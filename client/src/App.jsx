import {Route, Routes, useLocation} from 'react-router-dom'
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
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // obtiene el userId del localStorage
  const location = useLocation(); // obtenemos la ruta actual

  const handleLogin = (id) => {
    setUserId(id); // actualiza el userId cuando se inicie sesión
    localStorage.setItem('userId', id); // guarda el userId en el localStorage
  };

  const handleLogout = () => {
    setUserId(null); // actualiza el userId a null
    localStorage.removeItem('userId'); // elimina el userId del localStorage
  };
  

  return (
    <div className='bg-zinc-900 h-screen'>
      {location.pathname === '/' || location.pathname === '/register' ? ( null ) : <Navbar onLogout={handleLogout}/>}
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider userId={userId}>
        <Routes>
          <Route path='/' element={<LoginForm onLogin={handleLogin}/>} />
          <Route path='/register' element={<UserForm onLogin={handleLogin}/>} />
          <Route path='/taskspage' element={<TaskPage />} />/*Pagina de entrada
          <Route path='/new' element={<TaskForm userId={userId}/>} />
          <Route path='/edit/:id' element={<TaskForm userId={userId}/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </TaskContextProvider>
      </div>
    </div>
  )
}

export default App
