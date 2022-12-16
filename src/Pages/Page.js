import React from 'react'
import Home from '../Pages/Home'

import {Route, Routes} from 'react-router-dom'
import Cuisine from '../Pages/Cuisine'

function Page() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element ={<Cuisine />} />
    </Routes>
   
  )
}

export default Page