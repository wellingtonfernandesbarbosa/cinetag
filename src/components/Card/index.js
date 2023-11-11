import { useFavoriteContext } from "Contexts/Favorites";
import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png";
import unfavoriteIcon from "./unfavorite.png"

function Card({ id, title, cover }) {
  const {favorite, addFavorite} = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? unfavoriteIcon : favoriteIcon;

  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover}></img>
      <h2>{title}</h2>
      <img
        src={icon}
        alt="Favoritar filme"
        className={styles.favorite}
        onClick={() => {
          addFavorite({id, title, cover})
        }}
      ></img>
    </div>
  );
}

export default Card;
