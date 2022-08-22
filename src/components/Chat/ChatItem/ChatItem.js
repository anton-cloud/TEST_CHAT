import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

import useMediaQuery from "../../../hooks/useMediaQuery";
import UnreadMessages from "../../Message/UnreadMessages";

import Avatar from "../../General/Avatar";

import './ChatItem.scss'

const ChatItem = ({ chatInfo, setIsOpen }) => {
    const navigate = useNavigate();
    let { chatId } = useParams();
    const isDesktop = useMediaQuery('(min-width: 900px)');

    const { id, contactInfo, unreadMessages, lastMessage } = chatInfo
    const { userName, imageUrl } = contactInfo;


    const redirectToChat = () => {
        if (chatId && !isDesktop) {
            setIsOpen(false)
        }
        navigate(`/chat/${id}`);
    }

    return (
        <li className="chatItem" onClick={redirectToChat}>
            <Avatar imageUrl={imageUrl} />
            <div className="chatItem__text">
                <p>{userName}</p>
                <p>{
                    lastMessage
                        ? lastMessage.value
                        : `Start chat with ${userName}`
                }</p>
            </div>
            <div className="chatItem__info">
                <p className="chatItem__time">{moment().format('ll')}</p>
                {
                    unreadMessages
                        ? <UnreadMessages unreadMessages={unreadMessages} />
                        : null
                }
            </div>
        </li>
    );
};

export default ChatItem;