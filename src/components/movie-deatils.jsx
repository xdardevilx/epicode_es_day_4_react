import searchFromIdAPI from "../data/movie-id.api";
import FilmCardComponent from "./film-card";
import { useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useState } from "react";

const MovieDetails = () => {
  //   const { movieId, setMovieId } = useState(useParams());
  const { movieId } = useParams();
  const { film, setFilm } = useState(null);
  //   async function fetchData() {
  //     const resp = await ;
  //     setFilm(resp);
  //   }
  //   const fetchData = useCallback(async()=> {
  //     console.log("<fn")
  //     const data = await searchFromIdAPI(movieId);
  //     setFilm(data)
  //   }, [movieId, setFilm])

  useEffect(() => {
    async function fetchData() {
      const resp = await searchFromIdAPI(movieId);
      
    //   setFilm(resp);
    }
    fetchData();
  }, [movieId]);

  return <>{/* <FilmCardComponent film={film} /> */}</>;
};
export default MovieDetails;
