import { useEffect } from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

import useMediaQuery from "../../hooks/useMediaQuery";
import { resetUnreadMessages, selectChatById } from "../../store/slices/chatsSlices";

import './RightColumn.scss'
import Container from '../General/Container';
import Flex from '../General/Flex';
import ProfileCart from '../General/ProfileCart';
import MessageList from '../Message/MessageList';
import MessageInput from '../Message/MessageInput';
import DrawerButton from '../Drawer/DrawerButton';
import { colors } from '../../data/variables';

const { accent } = colors;



const RightColumn = () => {
    let { chatId } = useParams();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useOutletContext();
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const { contactInfo, messages } = useSelector((state) => selectChatById(state, chatId))

    const { userName, imageUrl, id } = contactInfo;

    useEffect(() => {
        dispatch(resetUnreadMessages({ chatId }))
    }, [messages])

    return (
        <div className='chat__container' isOpen={isOpen}>
            <Container hight='10vh'>
                <Flex backgroundColor={accent}>
                    {
                        isDesktop ? null : <DrawerButton setIsOpen={setIsOpen}><CgMenuLeftAlt /></DrawerButton>
                    }
                    <ProfileCart userName={userName} imageUrl={imageUrl} />
                </Flex>
            </Container >
            <MessageList
                messages={messages}
                contactInfo={contactInfo}
            />
            <div className='chat__input-wrapper'>
                <MessageInput contactId={id} />
            </div>
        </div>
    );
};
export default RightColumn;