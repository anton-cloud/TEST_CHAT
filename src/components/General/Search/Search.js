import { GoSearch } from "react-icons/go";
import InputField from "../InputField";
import "./Search.scss"

const Search = ({ value, setValue, children, placeholder = "Search contatct" }) => {

    const onChangeValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="search" value={value} onChange={onChangeValue} placeholder={placeholder}>
            <GoSearch />
            <InputField value={value} onChange={onChangeValue} placeholder="Search or start new chat" />
        </div>
    );
}

export default Search;