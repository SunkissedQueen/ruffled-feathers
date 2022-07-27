import React from 'react'
import { Header, Footer } from './components'

// import each individually
import { 
  Home,  
  CluckIndex, 
  CluckShow, 
  CluckNew, 
  CluckEdit, 
  NoCluck
} from './index'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

export default function App() {

  return (
    <>
      <Header />
      <h1>Chicken Tender</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route path="/cluckindex" element={<CluckIndex />} />
          <Route path="/cluckshow" element={<CluckShow />} />
          <Route path="/clucknew" element={<CluckNew />} />
          <Route path="/cluckedit" element={<CluckEdit />} />
          <Route element={<NoCluck />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

