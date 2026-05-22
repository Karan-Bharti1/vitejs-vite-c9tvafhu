import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pending from './Pending.jsx'
import Reporting from "./Reporting.jsx"
import About from "./About.jsx"
import InterviewContext from "./contexts/interview.jsx"
import { createBrowserRouter,RouterProvider} from "react-router-dom"

import {InterviewContextProvider} from "./contexts/interview.jsx"
const router=createBrowserRouter([{
path:"/",
element:<App/>,
children:[{
  element:<About/>,
  index:true
},{
  path:"/reporting",
  element:<Reporting/>},
  {
    path:"/pending",
    element:<Pending/>
  }]
},

])
function AppLayout(){
 
  return(  <InterviewContextProvider>
    <RouterProvider router={router}/>
    </InterviewContextProvider>)
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppLayout/>
  </StrictMode>,
)
