import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userInfo: {
            id: "1",
            userName: null,
            email: null,
            imageUrl: "https://support.lastpass.com/assets/images/care/topnav/default-user-avatar.jpg"
        }
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.userInfo = {
                ...state.userInfo,
                ...action.payload,
            }
        },
        logout: (state) => {
            state.isAuth = false;
            state.userInfo = {
                ...state.userInfo,
                userName: null,
                email: null,
            }
        }
    },
})

export const selectorIsAuth = (state) => state.auth.isAuth;
export const selectorUserInfo = (state) => state.auth.userInfo;
export const selectorUserId = (state) => state.auth.userInfo.id;

export const { login, logout } = authSlice.actions

export default authSlice.reducer