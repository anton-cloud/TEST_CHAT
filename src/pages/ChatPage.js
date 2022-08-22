import { useState } from 'react';
import { Outlet, useParams } from "react-router-dom";

import useMediaQuery from "../hooks/useMediaQuery";

import Container from "../components/General/Container";
import Flex from "../components/General/Flex";
import LeftColumn from "../components/LeftColumn";
import Drawer from '../components/Drawer/Drawer';

const ChatPage = () => {
    const { chatId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 900px)');

    return (
        <Flex>
            <Flex style={{ flexDirection: "row" }}>
                {
                    isDesktop
                        ? <LeftColumn />
                        : <Drawer isOpen={isOpen} isChatSelected={chatId}>
                            <LeftColumn setIsOpen={setIsOpen} />
                            <Container height="5vh" borderTop />
                        </Drawer>
                }
                {
                    chatId
                        ? <Outlet context={[isOpen, setIsOpen]} />
                        : <Container height="95hv" minWidth="65vw" />
                }
            </Flex>
            <Container height="5vh" borderTop />
        </Flex>
    );
};

export default ChatPage;