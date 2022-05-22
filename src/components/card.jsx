import './card.css'
import IconEllipsis from "../images/icon-ellipsis"
import IconWork from "../images/icon-work"
import IconStudy from "../images/icon-study"
import IconSocial from "../images/icon-social"
import IconSelfCare from "../images/icon-self-care"
import IconPlay from "../images/icon-play"
import IconExercise from "../images/icon-exercise"
const types = {
    work: { name: 'Work', color: "var(--pmr-light-red)", icon: <IconWork className='cardicon' width='100px' height='78px' /> },
    study: { name: 'Study', color: "var(--pmr-light-red)", icon: <IconStudy className='cardicon' width='100px' height='78px' /> },
    social: { name: 'Social', color: "var(--pmr-violet)", icon: <IconSocial className='cardicon' width='100px' height='78px' /> },
    selfcare: { name: 'Selfcare', color: "var(--pmr-soft-orangeare)", icon: <IconSelfCare className='cardicon' width='100px' height='78px' /> },
    play: { name: 'Play', color: "var(--pmr-soft-blue)", icon: <IconPlay className='cardicon' width='100px' height='78px' /> },
    exercise: { name: 'Exercise', color: "var(--pmr-lime-green)", icon: <IconExercise className='cardicon' width='100px' height='78px' /> }
}

const Card = (props) => {
    const selectedType = types[props.type]
    const [current, previous] = props.timestamps
    return (
        <div className="card">
            <div className={`cardtop ${props.type}`}>
                {selectedType.icon}
            </div>
            <div className="cardbottom">
                <div className='ellipsis'>
                    <h2>{selectedType.name}</h2> <IconEllipsis />
                </div>
                <div className="hours">
                    <p>{current}Hrs</p> <p className="previous-hours">Last Week - {previous} hours</p>
                </div>
            </div>
        </div>
    )
}
export default Card