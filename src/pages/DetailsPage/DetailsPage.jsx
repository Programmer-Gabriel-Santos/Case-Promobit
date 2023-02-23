import React, { useContext, useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../../constants/constants"
import GlobalContext from "../../Global/GlobalContext"
import DetailsCard from "../../components/DetailsCard/DetailsCard"
import TrailerCard from "../../components/TrailerCard/TrailerCard"
import CastCard from "../../components/CastCard/CastCard"
import { ContainerCast, Recommendations, Subtitle } from "./styleDetails"
import FilmCard from "../../components/FilmCard/FilmCard"

const DetailsPage = () => {

    const { id } = useContext(GlobalContext)

    const [movie, setMovie] = useState()

    const [castCrew, setCastCrew] = useState()

    const [recommendations, setRecommendations] = useState(null)

    const trailers = movie?.videos.results

    const cast = castCrew?.cast

    const getMovieById = () => {
        fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
    }

    const getCastCrew = () => {
        fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => setCastCrew(data))
    }

    const getRecommendations = () => {
        fetch(`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((results) => setRecommendations(results))
    }

    useEffect(() => {
        getMovieById()
        getCastCrew()
        getRecommendations()
    }, [id])


    return (
        <section>
            {movie && castCrew && <DetailsCard movie={movie} castCrew={castCrew} />}
            <Subtitle>Elenco original</Subtitle>
            <ContainerCast>
                {
                    cast?.map((cast) => {
                        return (<CastCard key={cast.cast_id} cast={cast} />)
                    })
                }
            </ContainerCast>
            {movie && <Subtitle>Trailer</Subtitle>}
            {movie && <TrailerCard trailers={trailers} />}
            {recommendations && <Subtitle>Recomendações</Subtitle>}
            {recommendations && (
                <Recommendations>
                    {
                        recommendations?.results.map((movie) => {
                            return (<FilmCard key={movie.id} movie={movie} />)
                        })
                    }
                </Recommendations>
            )}
        </section>
    )
}

export default DetailsPage