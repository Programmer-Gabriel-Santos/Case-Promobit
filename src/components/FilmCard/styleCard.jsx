import styled from 'styled-components'


export const Img = styled.img`
    width: 11em;
    height: 14em;
    border: 1px solid #E7E7E7;
    border-radius: 4px;

    :hover {
        animation: StyleImg 0.3s linear both;
        @keyframes StyleImg {
        100% {
            transform: scale(1.08);
        }
    }}

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
       width: 9.75em;
    }
`

export const Date = styled.p`
    font-size: 0.875em;
`

export const CardContainer = styled.li`
    display: flex-box;
    flex-wrap: wrap;
    max-width: 11em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        max-width: 8.75em;
    }
`