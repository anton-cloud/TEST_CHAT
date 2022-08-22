
import { BiMessageDetail } from "react-icons/bi";
import './UnreadMessages.scss'

const UnreadMessages = ({ unreadMessages }) => {
    return (
        <div className='messages__unread'>
            <BiMessageDetail />
            <p>{unreadMessages}</p>
        </div>
    );
}

export default UnreadMessages;