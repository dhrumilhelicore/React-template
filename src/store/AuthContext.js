import React ,{ useState ,useEffect, useContext } from "react";
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [progress, setIsProgress] = useState(0);

    function signup(email, password) {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((userData) => {
                userData.user.sendEmailVerification();
                auth.signOut();
                alert(
                    " Congratulations, your account has been successfully created.Please Verify It before Login"
                );
            });
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then((verify) => {
            const valid = verify.user.emailVerified;

            if (valid === false) {
                alert("Please Verify Your Email!");
                auth.signOut();
            }
        });
    }

    function logout() {
        return auth.signOut();
    }

    const value = {
        currentUser,
        login,
        signup,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}