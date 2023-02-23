import React, { useEffect, useState } from "react"
import { BASE_MOVIE_POPULAR, BASE_SEARCH_MOVIE, BASE_URL } from "../../constants/constants"
import {
    Description, ContainerCards,
    MainContainer, Introduction,
    Search, Input, Button, ButtonPage,
    ContainerButtons,
    TextPage,
    ContainerLoading,
} from "./styleHome"
import useSearch from "../../hooks/useSearch"
import FilmCard from "../../components/FilmCard/FilmCard"
import Loading from "../../components/Loading/Loading"


const HomePage = () => {

    const [movies, setMovies] = useState()

    const [form, handleInput] = useSearch("")

    const [page, setPage] = useState(1)

    const [finishedTimeout, setFinishedTimeout] = useState(false)


    useEffect(() => {
        getMoviesPopular()
    }, [])

    useEffect(() => {
        if (form === "") {
            setPage(1)
            getMoviesPopular()
        }
    }, [form])

    useEffect(() => {
        if (form !== "") {
            getMoviesBySearch()
        } else {
            getMoviesPopular()
        }
    }, [page])

    useEffect(() => {
        const id = setTimeout(() => {
            setFinishedTimeout(true);
        }, 1000);

        return () => clearTimeout(id);
    }, []);

    const getMoviesPopular = () => {
        fetch(`${BASE_URL}${BASE_MOVIE_POPULAR}${page}&limit=24`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
    }

    const getMoviesBySearch = () => {
        fetch(`${BASE_URL}${BASE_SEARCH_MOVIE}${form}&page=${page}&limit=24`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
    }

    const onSubmitSearch = (e) => {
        e.preventDefault()

        if (form !== "") {
            getMoviesBySearch()
        }
    }

    return (
        <MainContainer>
            <Introduction>
                <Description>
                    Milhões de filmes, séries e pessoas
                    para descobrir. Explore já.
                </Description>

                <Search>
                    <form onSubmit={onSubmitSearch}>
                        <Input
                            type="search"
                            value={form}
                            onChange={handleInput}
                            label="search"
                            required
                        />
                        <Button type="submit"> Buscar </Button>
                    </form>
                </Search>
            </Introduction>
            {
                !finishedTimeout && (
                    <ContainerLoading>
                        <Loading />
                    </ContainerLoading>
                )
            }
            {
                finishedTimeout && (
                    <ContainerCards>
                        {movies?.map((movie) => {

                            return (
                                <FilmCard key={movie.id} movie={movie} />
                            )
                        })}
                    </ContainerCards>
                )
            }
            {
            page > 1 && <TextPage>pag: {page}</TextPage>
            }
            <ContainerButtons>
                {
                    page > 1 && <ButtonPage onClick={() => setPage(page - 1)}> &lt; </ButtonPage>
                }
                <ButtonPage onClick={() => setPage(1)}> 1 </ButtonPage>
                <ButtonPage onClick={() => setPage(2)}> 2 </ButtonPage>
                <ButtonPage onClick={() => setPage(3)}> 3 </ButtonPage>
                <ButtonPage onClick={() => setPage(4)}> 4 </ButtonPage>
                <ButtonPage onClick={() => setPage(5)}> 5 </ButtonPage>
                <ButtonPage onClick={() => setPage(page + 1)}>&gt;</ButtonPage>
            </ContainerButtons>
        </MainContainer>
    )
}

export default HomePage