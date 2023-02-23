import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    height: 2.5rem;
    background-color: #5C16C5;
    gap: 0.3em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        justify-content: center;
        height: 3rem;
    }
`

export const Title = styled.h3`
    margin: 0 0 0 5vw;
    font-size: 1.5em;
    color: #FFFFFF;
`

export const GoHome = styled.button`
    max-height: 1rem;
    width: 3rem;
    margin-top: 0.7em;
    border-radius: 25px;
    border: none;
`