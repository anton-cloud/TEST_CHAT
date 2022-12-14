import { Navigate, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectorIsAuth } from "../store/slices/authSlice";

import LoginPage from "../pages/LoginPage";
import ChatPage from "../pages/ChatPage";
import RightColumn from "../components/RightColumn";

const AppRouter = () => {
    const isAuth = useSelector(selectorIsAuth);

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                {
                    isAuth
                        ? <Route path="/chat" element={<ChatPage />}>
                            <Route path=":chatId" element={<RightColumn />} />
                        </Route>
                        : null
                }
                <Route
                    path="*"
                    element={<Navigate to={isAuth ? "/chat" : "/login"} />}
                />
            </Routes>
        </>
    )
}

export default AppRouter;