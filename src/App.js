import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<MainPage />} />

          {/* Route for video details page */}
          <Route path="/videos/:id" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
