import React from "react";
import styles from "./Favorites.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useFavoriteContext } from "Contexts/Favorites";

const Favorites = () => {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image={"favorites"} />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favorites;
