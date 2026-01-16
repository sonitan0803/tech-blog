import type { Dispatch, SetStateAction } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type LoginFormViewProps = {
    username: string;
    password: string;
    setUsername: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    onLogin: () => void;
};

export const LoginFormView = (props: LoginFormViewProps) => {
    return (
        <div
            style={{
                width: "100dvw",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
            }}
        >
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "24px",
                    width: "100%",
                    maxWidth: "320px",
                }}
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onLogin();
                }}
                autoComplete="on"
            >
                <TextField
                    id="username"
                    label="username"
                    variant="outlined"
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
                    autoComplete="username"
                />
                <TextField
                    id="password"
                    label="password"
                    variant="outlined"
                    type="password"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};
