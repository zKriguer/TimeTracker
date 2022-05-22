import avatar from '../images/image-jeremy.png'
import './profile.css'
const Profile = (props) => {
    return (
        <div className="profile">
            <img src={avatar} alt="Avatar"></img>
            <div className="profilecontent">
                <p>Report for</p>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}
export default Profile