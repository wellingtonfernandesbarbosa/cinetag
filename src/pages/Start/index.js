import styles from "./Start.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import movies from "json/db.json";
import Container from "components/Container";

function Start() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Container>
        <section className={styles.container}>
          {movies.map((movie) => {
            return <Card {...movie} key={movie.id} />;
          })}
        </section>
      </Container>
    </>
  );
}

export default Start;
