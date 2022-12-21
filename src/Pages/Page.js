import React from 'react'
import Home from '../Pages/Home'
import {Route, Routes} from 'react-router-dom'
import Cuisine from '../Pages/Cuisine'
import Searched from '../Pages/Searched';
import Recipe from '../Pages/Recipe';

function Page() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element ={<Cuisine />} />
        <Route path="/searched/:search" element ={<Searched />} />
        <Route path="/recipe/:name" element ={<Recipe />} />
    </Routes>
   
  )
}

export default Page