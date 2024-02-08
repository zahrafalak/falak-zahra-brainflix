import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../HomePage/HomePage';

const MainVideoPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path=":id" element={<VideoDetailsPage />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default MainVideoPage;