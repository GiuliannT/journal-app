import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Wait...</h1>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                {
                    isLoggedIn
                        ? (
                            <>
                                <Route path="/" element={<JournalScreen />} />
                                <Route path="auth/*" element={<Navigate to="/" />} />
                            </>
                        )
                        : (
                            <>
                                <Route path="*" element={<Navigate to="auth/login" />} />
                                <Route path="auth/*" element={<AuthRouter />} />
                            </>
                        )
                }

                {/* <Route path="*" element={<Navigate to="/auth/login" replace />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
