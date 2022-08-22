import { useSelector } from "react-redux";
import { filter } from "lodash";

import { selectAllContacts } from "../../../store/slices/chatsSlices";
import ChatItem from "../ChatItem";

import './ChatList.scss'

const ChatList = ({ setIsOpen, deferredValue }) => {

    const contacts = useSelector(selectAllContacts)
    const filteredChats = filter(contacts, contact => contact.contactInfo.userName.toLowerCase().includes(deferredValue.toLowerCase()))

    return (
        <div className="chat__wrapper">
            <h2 className="chat__title">Chats</h2>
            <ul className="chat__list">
                {
                    filteredChats.map(chat => <ChatItem
                        key={chat.id}
                        chatInfo={chat}
                        setIsOpen={setIsOpen}
                    />)
                }
            </ul>
        </div >
    );
}

export default ChatList;