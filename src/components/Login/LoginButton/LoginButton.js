import './LoginButton.scss'

const LoginButton = ({ type }) => {
    return (
        <button type={type} className="loginButton">
            Login
        </button>
    );
}

export default LoginButton;