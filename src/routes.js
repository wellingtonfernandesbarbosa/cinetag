import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "pages/Start";
import Header from "components/Header";
import Footer from "components/Footer";
import Favorites from "pages/Favorites";
import FavoritesProvider from "Contexts/Favorites";
import Player from "pages/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Player />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
