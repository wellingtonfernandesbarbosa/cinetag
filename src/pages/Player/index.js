import { useParams } from "react-router-dom";

import styles from "./Player.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Container from "components/Container";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {
  const params = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/wellingtonfernandesbarbosa/cinetag-api/movies?id=${params.id}`
    )
      .then((response) => response.json())
      .then(data => {
        setMovie(...data);
      });
  }, [params.id]);

  if (!movie) {
    return <NotFound />;
  }

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
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </Container>
    </>
  );
}

export default Player;
