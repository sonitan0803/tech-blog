import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Main, Sub } from "@/screens/";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sub" element={<Sub />} />
            </Routes>
        </Router>
    );
}

export default App;
