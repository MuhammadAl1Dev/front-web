import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Ozbekiston from "./pages/OzbekistonPage";
import Jahon from "./pages/JahonPage";
import FanTexnikaPage from "./pages/FanTexnikaPage";
import SportPage from "./pages/SportPage";
import AdminPage from "./admin/AdminPage";
import NewsOnePage from "./pages/NewsOnePage";
import AllNewsList from "./pages/AllNewsList";
import UzbEditPage from "./pages/UzbEditPage";
import ModalEdit from "./components/ModalEdit";
import SportEditPage from "./pages/SportEditPage";
import JahonEditPage from "./pages/JahonEditPage";
import FanTexEditPage from "./pages/FanTexEditPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" index element={<HomePage />} /> 
        <Route path="/ozbekiston" index element={<Ozbekiston />} />
        <Route path="/jahon" index element={<Jahon />} />
        <Route path="/fan-texnika" index element={<FanTexnikaPage />} />
        <Route path="/sport" index element={<SportPage />} />
        <Route path="/admin-form-page" index element={<AdminPage />} />
        <Route path="/news-one/:news_id" index element={<NewsOnePage />} />
        <Route path="/all-news-list" index element={<AllNewsList />} />
        <Route path="/uzb-edit-page" index element={<UzbEditPage />} />
        <Route path="/edit-news/:news_id" index element={<ModalEdit />} />
        <Route path="/sport-edit-page" index element={<SportEditPage />} />
        <Route path="/jahon-edit-page" index element={<JahonEditPage />} />
        <Route path="/fantexnika-edit-page" index element={<FanTexEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
