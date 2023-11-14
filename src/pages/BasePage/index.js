import FavoritesProvider from "Contexts/Favorites";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

function BasePage() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  );
}

export default BasePage;
