import { ContainerCircleBar } from "./styleDetailsCard"
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const renderCicle = (percent) =>{
    return(
        <ContainerCircleBar >
                    <CircularProgressbar
                        value={percent}
                        text={`${percent}%`}
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgb(20, 255, 0, ${percent / 100})`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'rgba(255, 255, 255, 0.1)',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#14FF00',
                                fontSize: '24',
                            },
                            background: {
                                fill: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    />
                </ContainerCircleBar>
    )
}

export default renderCicle