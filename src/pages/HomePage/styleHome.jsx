import styled from "styled-components"

export const MainContainer = styled.div`
    background-color: #E5E5E5;
`

export const Introduction = styled.section`
    display: flex;
    max-width: 100vw;
    height: 38vh;
    background-color: #2D0C5E;
    flex-wrap: wrap;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
       height: 30vh;
    }
`

export const Description = styled.h1`
    display: flex;
    color: #FFFFFF;
    max-width: 52vw;
    font-size: 3em;
    font-family: 'Roboto';
    text-align: center;
    margin: auto;
    margin-top: 1.5em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        color: #FFFFFF;
        max-width: 80vw;
        font-size: 24px;
        font-family: 'Roboto';
        text-align: start;
        margin: auto;
        margin-top: 1.5em;
    }
`

export const Search = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
`

export const Input = styled.input`
    width: 20rem;
    height: 1.5rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
       width: 16em;
       height: 1.8em;
    }
`

export const Button = styled.button`
    width: 4rem;
    height: 1.5rem;
`

export const ContainerLoading = styled.div`
    min-width: 100vw;
    min-height: 100vh;
`

export const ContainerCards = styled.ul`
    display: flex;
    max-width: 70vw;
    min-height: 100vh;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 2rem;
    gap: 2rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        max-width: 98vw;
        min-height: 100vh;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2em;
        gap: 2em;
    }
`

export const ContainerButtons = styled.span`
    display: flex;
    justify-content: center;
    gap: 3em;
    height: 5rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        flex-wrap: wrap;
        height: 3em;
        gap: 1em;
    }
`

export const ButtonPage = styled.button`
    color: #5C16C5;
    border: none;
    font-size: 1rem;
    padding: 0.5rem;
    font-weight: bolder;
    background-color: #E5E5E5;
    :hover{
        color: #13032a;
    }
    :active{
        color: #13032a;
    }
`

export const TextPage = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 1.6em;
    color: #5C16C5;
`