import React from 'react'
import ReactDom from 'react-dom/client'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home.js'
import Contact from './contact.js'

const Container = ()=>{
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
  )
}



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
)
