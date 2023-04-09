import {Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import TaskPage from './pages/TasksPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'
import UserForm from './pages/UserForm'
import LoginForm from './pages/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='login' element={<LoginForm/>} />
        <Route path='register' element={<UserForm/>} />
        <Route path='/' element={<TaskPage/>} />//Pagina de entrada
        <Route path='/new' element={<TaskForm/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
