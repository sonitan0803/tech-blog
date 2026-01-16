import { LoginFormView } from "./login_form.view";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, supabase } from "@/utils/spabase";

import { SnackStateContext } from "@/context/snack_bar";

export const LoginForm = () => {
    const { SnackBar, setSnackState } = useContext(SnackStateContext);
    const navigate = useNavigate();
    // Form state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    supabase.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_IN") {
            setSnackState({
                isOpen: true,
                message: "ログイン成功",
                severity: "success",
                vertical: "bottom",
                horizontal: "right",
            });
            setTimeout(() => {
                navigate("/user_data");
            }, 1000); // 1.2秒後に遷移
        }
    });

    // Login handler
    const handleLogin = () => {
        login(username, password).catch((error) => {
            setSnackState({
                isOpen: true,
                message: "ログイン失敗:" + error.message,
                severity: "error",
                vertical: "bottom",
                horizontal: "right",
            });
        });
    };

    return (
        <div>
            {SnackBar}
            <LoginFormView
                onLogin={handleLogin}
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </div>
    );
};
