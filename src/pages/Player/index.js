import Container from "components/Container";
import styles from "./Player.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import movies from "json/db.json";
import { useParams } from "react-router-dom";

function Player() {
  const params = useParams();
  const movie = movies.find((movie) => {
    return movie.id === Number(params.id);
  });
  console.log(movie);
  return (
    <>
      <Banner image="player" />
      <Container>
        <Title>
          <h1>Player</h1>
        </Title>
        <section className={styles.container}>
          <iframe
            width="100%"
            height="100%"
            src={movie.link}
            title={movie.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </Container>
    </>
  );
}

export default Player;
