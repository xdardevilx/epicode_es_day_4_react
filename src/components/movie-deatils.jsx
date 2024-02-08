import searchFromIdAPI from "../data/movie-id.api";
import FilmCardComponent from "./film-card";
import { useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const resp = await searchFromIdAPI(movieId);
      setFilm(resp);
      setIsLoading(false);
    }
    fetchData();
  }, [movieId]);

  return isLoading ? (
    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
      <Spinner className="text-center" />
    </div>
  ) : (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={4}>
          <FilmCardComponent film={film} />
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
