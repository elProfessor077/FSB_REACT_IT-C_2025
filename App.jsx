import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './component/login.jsx'

function App() {

  return (
    <>
     {/* <h2>Welcome to react app</h2> */}
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/mainlayout' element={<MainLayout/>}></Route>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
