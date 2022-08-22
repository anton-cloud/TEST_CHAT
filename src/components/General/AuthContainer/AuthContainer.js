import './AuthContainer.scss'

const LoginContainer = ({ children }) => {
    return (
        <div className='auth__wrapper'>
            <div className='auth__container'>
                {children}
            </div>
        </div>
    );
}

export default LoginContainer;