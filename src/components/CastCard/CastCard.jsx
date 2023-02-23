import React from "react"
import { BASE_URL_POSTERS } from "../../constants/constants"
import { CardContainer, Img } from "./styleCastCard"

const CastCard = (props) => {

    const cast = props.cast
    const { profile_path, original_name, character } = props.cast

    return (
        <CardContainer>
                <Img src={BASE_URL_POSTERS + profile_path} alt={original_name} />
                <p><b>{original_name}</b></p>
                <p>{character}</p>
        </CardContainer>
    )
}

export default CastCard