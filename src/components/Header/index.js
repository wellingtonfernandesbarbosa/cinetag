import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";
import HeaderLink from "../HeaderLink";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo do CineTag"></img>
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./Favorites">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
