import React from 'react'
import Home from '../Pages/Home'
import {Route, Routes, useLocation} from 'react-router-dom'
import Cuisine from '../Pages/Cuisine'
import Searched from '../Pages/Searched';
import Recipe from '../Pages/Recipe';
import { AnimatePresence } from 'framer-motion';

function Page() {
  const location= useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element ={<Cuisine />} />
        <Route path="/searched/:search" element ={<Searched />} />
        <Route path="/recipe/:name" element ={<Recipe />} />
    </Routes>
    </AnimatePresence>
   
  )
}

export default Page