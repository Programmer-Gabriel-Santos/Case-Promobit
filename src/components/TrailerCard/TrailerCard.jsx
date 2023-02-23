import React from "react"
import { StyleIframe, TrailerContainer } from "./styleTrailerCard"

const TrailerCard = ({ trailers }) => {

    return (
        <TrailerContainer>
            {
                trailers.length ? trailers.map((trailer) => {
                    return (
                        
                        <li>
                            <StyleIframe key={trailer.id}
                            width="650"
                            height="350"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen = "true"
                        />
                        </li>
                    )
                })
                    : <p>Sem trailer disponível no momento :(</p>
            }
        </TrailerContainer>
    )
}

export default TrailerCard