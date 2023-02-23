import React, { useContext } from "react"
import {BASE_URL_POSTERS} from '../../constants/constants'
import { Img, CardContainer, Title, Date} from './styleCard'
import GlobalContext from "../../Global/GlobalContext"
import { useNavigate } from "react-router-dom"
import { goDetails } from "../../routes/coordinator"
import Loading from "../Loading/Loading"

const FilmCard = (props) => {

    const navigate = useNavigate()

    const {setId} = useContext(GlobalContext)

    const { title, id, release_date, poster_path } = props.movie
    

    return (
            <CardContainer onClick={() => goDetails(navigate, id, setId)}>
                {<Img src={BASE_URL_POSTERS + poster_path} alt={title} /> || <Loading/>}
                <p><b>{title}</b></p>
                <Date >{release_date}</Date>
            </CardContainer>
    )
}

export default FilmCard