import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/HomePage"
import HeaderContainer from "../components/Header/Header"

const Router = () =>{
    return(
        <BrowserRouter>
            <HeaderContainer/>
            <Routes>
                <Route index element={<HomePage/>}/>  

                <Route path="/" element={<HomePage/>}/>

                <Route path="/detalhes" element={< DetailsPage/>} />

                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router