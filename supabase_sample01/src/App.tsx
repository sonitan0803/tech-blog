import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginForm } from "@/screens/login_form/login_form.logic";
import { UserData } from "@/screens/user_data/user_data.logic";

import { SnackBarProvider } from "@/context/snack_bar";

function App() {
    return (
        <SnackBarProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/user_data" element={<UserData />} />
                    <Route path="*" element={<h1>Not Found Page</h1>} />
                </Routes>
            </BrowserRouter>
        </SnackBarProvider>
    );
}

export default App;
