import Avatar from "../Avatar";
import './ProfileCart.scss'

const ProfileCart = ({ userName, imageUrl }) => {
    return (
        <div className="profileCart">
            <Avatar imageUrl={imageUrl} />
            <p className="profileCart__username">{userName}</p>
        </div>
    );
}

export default ProfileCart;