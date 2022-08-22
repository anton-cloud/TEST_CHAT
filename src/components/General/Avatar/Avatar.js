import './Avatar.scss'

const Avatar = ({ imageUrl }) => {
    return (
        <img className="avatar" src={imageUrl} alt="avatar" />
    );
}

export default Avatar;