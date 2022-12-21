import React from 'react'
import Home from '../Pages/Home'
import {Route, Routes} from 'react-router-dom'
import Cuisine from '../Pages/Cuisine'
import Searched from '../Pages/Searched';

function Page() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element ={<Cuisine />} />
        <Route path="/searched/:search" element ={<Searched />} />
    </Routes>
   
  )
}

export default Page