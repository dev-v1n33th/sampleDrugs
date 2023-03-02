import React from 'react'
import Home from './Home'
import AboutUs from './screens/About Us/AboutUs'
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/about' element={ <AboutUs />}/>
        </Routes>
       
        </>
        
    )
}

export default App
