import React from "react"
import { BASE_URL_POSTERS } from "../../constants/constants"
import { Img, Title, ContaineAverage, StyleText, MainContainer, ContainerDetails, StyleOverview, StyleCrew, ContainerCrew, ContainerGenres } from "./styleDetailsCard"
import 'react-circular-progressbar/dist/styles.css'
import renderCicle from "./CircularProgress"

const DetailsCard = (props) => {

    const { castCrew } = props

    const { poster_path, title, release_date, genres, runtime, vote_average, overview } = props.movie

    const runTime = (runtime) => {
        const hour = Math.trunc(runtime / 60)
        const min = runtime % 60

        return `${hour}h ${min}m`
    }

    const calculateProgress = (votes) => {

        let average = votes * 10

        average = average.toFixed(0)

        return average
    }

    let percent = calculateProgress(vote_average)

    return (
        <MainContainer>
            <Img src={BASE_URL_POSTERS + poster_path} alt="" />
            <ContainerDetails>
                <Title>{title}</Title>
                <ContainerGenres>
                    <p> &nbsp; • {release_date}</p>
                    {
                        genres.map((genre) => {
                            return (
                                <p key={genre.name}> &nbsp; • {genre.name}</p>
                            )
                        })
                    }
                    <p> &nbsp; • {runTime(runtime)}</p>
                </ContainerGenres>

                <ContaineAverage>
                    {renderCicle(percent)}
                    <StyleText>Avaliação dos usuários</StyleText>
                </ContaineAverage>
                <p style={{ fontSize: '1.25em' }}><b>Sinopse</b></p>
                <StyleOverview>{overview}</StyleOverview>
                <ContainerCrew>
                    <StyleCrew>
                        <p><b>{castCrew?.crew[0]?.name}</b></p>
                        <p>{castCrew?.crew[0]?.job}</p>
                    </StyleCrew>
                    <StyleCrew>
                        <p><b>{castCrew?.crew[1]?.name}</b></p>
                        <p>{castCrew?.crew[1]?.job}</p>
                    </StyleCrew>
                    <StyleCrew>
                        <p><b>{castCrew?.crew[2]?.name}</b></p>
                        <p>{castCrew?.crew[2]?.job}</p>
                    </StyleCrew>
                </ContainerCrew>
                <ContainerCrew>
                    <StyleCrew>
                        <p><b>{castCrew?.crew[3]?.name}</b></p>
                        <p>{castCrew?.crew[3]?.job}</p>
                    </StyleCrew>
                    <StyleCrew>
                        <p><b>{castCrew?.crew[4]?.name}</b></p>
                        <p>{castCrew?.crew[4]?.job}</p>
                    </StyleCrew>
                    <StyleCrew>
                        <p><b>{castCrew?.crew[5]?.name}</b></p>
                        <p>{castCrew?.crew[5]?.job}</p>
                    </StyleCrew>
                </ContainerCrew>
            </ContainerDetails>
        </MainContainer>
    )
}

export default DetailsCard