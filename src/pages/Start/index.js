import styles from "./Start.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useEffect, useState } from "react";

function Start() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/wellingtonfernandesbarbosa/cinetag-api/movies"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card {...movie} key={movie.id} />;
        })}
      </section>
    </>
  );
}

export default Start;
