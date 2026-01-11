import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Services from './Components/Services.jsx'

const router=createBrowserRouter([{
  element:<App/>,
  path:"/",
  children:[{
element:<Home/>,
path:"/"
  },
{
element:<Services/>,
path:"/services"
}

]
}])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
