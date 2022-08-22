import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as Yup from 'yup';

import { login } from "../../../store/slices/authSlice";

import LoginButton from '../LoginButton';
import Avatar from '../../General/Avatar';

import './LoginForm.scss'

const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .min(5, 'Short username!')
        .required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            dispatch(login(values))
            navigate("/chat");
        },
    });

    return (
        <form className='form' onSubmit={formik.handleSubmit}>

            <Avatar imageUrl={"https://support.lastpass.com/assets/images/care/topnav/default-user-avatar.jpg"} />
            <input className='form__input'
                style={formik.errors.userName && { border: '2px solid red', color: "red" }}
                name="userName"
                type="text"
                placeholder={
                    formik.errors.userName ?
                        formik.errors.userName
                        : "Username"
                }
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <input className='form__input'
                style={formik.errors.email && { border: '2px solid red', color: "red" }}
                name="email"
                type="email"
                placeholder={
                    formik.errors.email ?
                        formik.errors.email
                        : "Email"
                }
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <LoginButton type={"submit"}>Login</LoginButton>
        </form >
    );
};

export default LoginForm;