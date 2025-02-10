import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './assets/Pages/landing page/homepage.jsx'
import AboutUs from './assets/Pages/About us/aboutus.jsx'
import Privacy from './assets/Pages/privacy/privacy.jsx'
import Faqs from './assets/Pages/Faqs/faqs.jsx'
import Terms from './assets/Pages/terms of use/termsofuse.jsx'




const router =  createBrowserRouter([
  
  { path: "/",
    element: <Homepage/>,
    errorElement: <div>404 Not Found</div>
  },
  { path: "/aboutus",
    element: <AboutUs/>,
    errorElement: <div>404 Not Found</div>
  },
  { path: "/privacy",
    element: <Privacy/>,
    errorElement: <div>404 Not Found</div>
  },  
  { path: "/faqs",
    element: <Faqs/>,
    errorElement: <div>404 Not Found</div>
  },
  { path: "/terms",
    element: <Terms/>,
    errorElement: <div>404 Not Found</div>
  }


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
