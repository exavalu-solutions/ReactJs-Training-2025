import { Navigate } from 'react-router-dom';

export const ProtectedRoute = (props) => {
    console.log("props >>", props);
    console.log("isLogin >>", props.isLogin)
    console.log("username >>", props.username)
    const isLoggedIn = props.isLogin; // mock auth

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
}
