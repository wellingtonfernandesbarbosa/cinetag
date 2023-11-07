import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "pages/Start";
import Header from "components/Header";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Start />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
