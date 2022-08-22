import { useState } from 'react';
import { MdOutlineSend } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { selectorUserId } from '../../../store/slices/authSlice'
import { addNewMessage, getNewMessage } from "../../../store/slices/chatsSlices";

import InputField from '../../General/InputField'

import './MessageInput.scss'

const MessageInput = ({ contactId }) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const userId = useSelector(selectorUserId);

    const onHandleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewMessage({
            from: userId,
            to: contactId,
            value: value,
        }))
        setTimeout(() => {
            dispatch(getNewMessage({
                from: contactId,
                to: userId,
            }))
        }, 10000)
        setValue('');
    }
    return (
        <div className='message__inputContainer'>
            <form className='message__form' onSubmit={handleSubmit}>
                <InputField value={value} onChange={onHandleChange} placeholder="Type your message" />
                <button className='message__button' type="submit">
                    <MdOutlineSend />
                </button>
            </form>
        </div>
    );
};

export default MessageInput;