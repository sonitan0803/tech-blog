import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./feature/home/home";
import Next from "./feature/next/next";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/next" element={<Next />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
