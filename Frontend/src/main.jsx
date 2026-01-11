import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Services from './Components/Services.jsx'
import Products from './Components/Products.jsx'
import Reviews from './Components/Reviews.jsx'
import Contact from './Contact.jsx'
import Pricing from './Components/Pricing.jsx'

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
},
{
  element:<Products/>,
  path:"/products"
},
{
  element:<Reviews/>,
  path:"/reviews"
},
{
  element:<Contact/>,
path:"/contact"
},
{
  element:<Pricing/>,
  path:"/pricing"

}
]
}])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
