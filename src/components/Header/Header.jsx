import React from "react"
import { HeaderContainer, Title, GoHome } from "./styleHeader"
import { goHome } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

const Header = () =>{

    const navigate = useNavigate()

    return(
        <HeaderContainer>
            <Title onClick={() => {goHome(navigate)}}>TMDB</Title>
            <GoHome onClick={() => {goHome(navigate)}}></GoHome>
        </HeaderContainer>
    )
}

export default Header