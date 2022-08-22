
import { colors } from '../../../data/variables';
import './Container.scss'

const Container = ({ children, backgroundColor = "white", borderRight = false, hight = "none" }) => {
    return (
        <div className="container" style={borderRight ? {
            backgroundColor: backgroundColor,
            hight: hight,
            borderRight: `2px solid ${colors.accent_line}`
        } : {
            backgroundColor: backgroundColor,
            hight: hight,
        }} > {children}</div >
    );
}

export default Container;