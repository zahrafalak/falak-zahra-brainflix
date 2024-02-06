import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../HomePage/HomePage';

const MainVideoPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainVideoPage;