import React, { useEffect, useRef } from 'react';

import EmptyChatMessage from '../../General/EmptyChatMessage';
import MessageItem from '../MessageItem';

import './MessageList.scss'

const MessageList = ({ messages, contactInfo }) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages])

    return (
        <ul className='message__list'>
            <div className="message__helper"></div>
            {
                messages.length
                    ? messages.map(message => <MessageItem
                        key={message.id}
                        contactId={contactInfo.id}
                        imageUrl={contactInfo.imageUrl}
                        message={message}
                    />)
                    : <EmptyChatMessage userName={contactInfo.userName} />
            }
            <div ref={messagesEndRef} />
        </ul>
    );
};
export default MessageList;