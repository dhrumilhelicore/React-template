import { Redirect, Route } from "react-router";
import { useAuth } from "./store/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={() => {
                return currentUser ? children : <Redirect to="/login" />;
            }}
        ></Route>
    );
};

export default PrivateRoute;