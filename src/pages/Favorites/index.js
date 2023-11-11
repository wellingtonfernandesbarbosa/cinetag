import React from "react";
import styles from "./Favorites.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import Container from "components/Container";
import { useFavoriteContext } from "Contexts/Favorites";

const Favorites = () => {
  const { favorite } = useFavoriteContext();
  console.log(favorite);

  return (
    <>
      <Banner image={"favorites"} />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <Container>
        <section className={styles.container}>
          {favorite.map((fav) => {
            return <Card {...fav} key={fav.id} />;
          })}
        </section>
      </Container>
    </>
  );
};

export default Favorites;
