import styled from "styled-components"

export const TrailerContainer = styled.ul`
    display: flex;
    max-width: 75vw;
    overflow-x: auto;
    margin: auto;
    margin-bottom: 2%;
    gap: 2rem;
    ::-webkit-scrollbar-thumb{
        background-color: #ADADAD;
        border-radius: 50px;
    }
    ::-webkit-scrollbar {
        width: 70vw;            
    }
`

export const StyleIframe = styled.iframe`
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 320px;
        height: 180px;
    }
`