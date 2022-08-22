import { useDeferredValue, useState } from 'react';
import { useSelector } from "react-redux";
import ChatList from '../Chat/ChatList';
import Container from '../General/Container';
import ProfileCart from '../General/ProfileCart';
import Search from '../General/Search';
import { selectorUserInfo } from "../../store/slices/authSlice";
import { colors } from '../../data/variables';

const LeftColumn = ({ setIsOpen }) => {

    const [searchValue, setSearchValue] = useState("");
    const deferredValue = useDeferredValue(searchValue);
    const { userName, imageUrl } = useSelector(selectorUserInfo);

    return (
        <Container borderRight="true">
            <Container backgroundColor={colors.accent} >
                <ProfileCart userName={userName} imageUrl={imageUrl} />
                <Search value={searchValue} setValue={setSearchValue} />
            </Container>
            <ChatList setIsOpen={setIsOpen} deferredValue={deferredValue} />
        </Container>
    );
};


export default LeftColumn;