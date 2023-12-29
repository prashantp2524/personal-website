import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import '../css/index.css'
import Layout from './Layout/Layout.jsx'
import HomePage from './Pages/HomePage.jsx'
import About from './Pages/About.jsx'
import Services from "./Pages/Services.jsx"
import Skills from './Pages/Skills.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='skills' element={<Skills />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path='contact' element={<Contact />} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
