import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Outlet} from "react-router-dom"
import './App.css'
import Nav from "./Nav.jsx"
function App() {


  return (
    <>
    <Nav/>
<Outlet/>
   
    </>
  )
}

export default App
