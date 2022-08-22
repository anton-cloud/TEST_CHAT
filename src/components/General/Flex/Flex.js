import './Flex.scss'

const Flex = ({ children, backgroundColor = "none" }) => {
    return (
        <div style={{ backgroundColor: backgroundColor }} className="flex">{children}</div>
    );
}

export default Flex;