import './DrawerButton.scss'

const DrawerButton = ({ setIsOpen, children }) => {
    return (
        <button className="drawerButton" onClick={() => setIsOpen(true)}>{children}</button>
    );
}

export default DrawerButton;