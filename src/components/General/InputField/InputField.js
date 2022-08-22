import './InputField.scss'

const InputField = ({ type = "text", value, onChange, placeholder, required = true }) => {
    return (
        <input className='inputField' type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} />
    );
}

export default InputField;