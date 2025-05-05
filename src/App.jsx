import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Addproduct from './components/Addproduct'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
  
<Nav/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Addproduct" element={<Addproduct/>}/>
</Routes>

 </>
  )
}

export default App
