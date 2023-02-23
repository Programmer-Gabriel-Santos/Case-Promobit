import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    background-Color: #2D0C5E;
    height: 58vh;
    margin-bottom: 3rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        background-Color: #2D0C5E;
        height: max-content;
        margin-bottom: 1rem;
    }
`

export const Img = styled.img`
    max-width: 23%;
    max-height: 98%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    transform: translate(4em, 3em);

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        position: absolute;
        min-width: 54vw;
        height: 40vh;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
        transform: translate(6em, 3em);

    }   
`
export const ContainerDetails = styled.section`
    display: flex-box;
    max-height: 60%;
    flex-wrap: wrap;
    color: #ffffff;
    margin: 0 0 0 6em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex-box;
        flex-wrap: wrap;
        color: #ffffff;
        margin: 44vh 0 0 1em;
    }
`

export const Title = styled.h1`
    font-size: 2em;
    margin-top: 1.5em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding-bottom: 0.2em;
    }
`

export const ContaineAverage = styled.span`
    display: flex;
    width: max-content;
    max-height: auto;
    margin: 1em 0 1.5em 0;
    box-sizing: border-box;
`

export const StyleText = styled.p`
    margin: 6px 8px;
`

export const ContainerCircleBar = styled.div`
    width: 3.2em;
    height: auto;
    background-Color:rgba(255, 255, 255, 0.1);
    border-Radius: 50%;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 3.6em;
    }
`
export const StyleOverview = styled.p`
    display: flex;
    max-width: 94vw;
    flex-wrap: wrap;
    margin-top: 0.5em;
`

export const ContainerCrew = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 90vw;
    grid-auto-rows: max-content;
    margin-bottom: 2em;
    margin-top: 2em;
    `
export const StyleCrew = styled.span`
    width: 26vw;
`