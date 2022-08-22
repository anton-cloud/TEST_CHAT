import "./Drawer.scss"

const Drawer = ({ isOpen, isChatSelected, children }) => {
    return (
        <>
            {isOpen || !isChatSelected ? <div className="drawer" style={{ transform: "translate(0)" }}>{children}</div> : <div className="drawer" style={{ transform: "translate(-100%)" }}>{children}</div>}
        </>
    );
}

export default Drawer;