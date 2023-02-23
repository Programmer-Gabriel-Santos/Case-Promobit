import styled from "styled-components"

export const Img = styled.img`
    max-width: 150px;
`

export const ContainerCast = styled.ul`
    display: flex;
    max-width: 75vw;
    overflow-x: auto;
    margin: auto;
    margin-bottom: 2%;
    gap: 2rem;
    ::-webkit-scrollbar-thumb{
        background-color: #ADADAD;
        border-radius: 50px;
        width: 20vw;
    }
    ::-webkit-scrollbar {
        width: 70vw;            
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        max-width: 94vw;
        margin: auto;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 1%;
    margin-left: 12.2%;
    font-weight: bolder;
    font-size: 1.5rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin-left: 1rem;
        margin-bottom: 2%;
    }
`

export const Recommendations = styled.ul`
    display: flex;
    max-width: 75vw;
    overflow-x: auto;
    margin: auto;
    justify-content: center;
    gap: 2rem;
    ::-webkit-scrollbar-thumb{
        background-color: #ADADAD;
        border-radius: 50px;
        width: 20vw;
    }
    ::-webkit-scrollbar {
        width: 70vw;            
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin: 0 0 0 1em;
        max-width: 90vw;
    }
`