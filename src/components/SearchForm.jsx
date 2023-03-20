import React, { useRef, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fetchMovie } from "../api/fetchMovie";
import { MovieCard } from "./MovieCard";

export const SearchForm = ({ addMovieToList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const strRef = useRef("");
  const [error, setError] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    error && setError(false);
    const str = strRef.current.value;

    //call the api and get movie details
    const data = await fetchMovie(str);

    if (data.Response === "True") {
      console.log(data);
      setSearchedMovie(data);
    } else {
      setError(true);
    }
  };

  const movieMode = (mode) => {
    addMovieToList({ ...searchedMovie, mode });
    setSearchedMovie({});
    strRef.current.value = "";
  };

  const removeMovie = () => {
    setSearchedMovie({});
    strRef.current.value = "";
  };
  return (
    <div className="d-flex justify-content-center flex-column gap-2">
      <Row>
        <Form onSubmit={handleOnSubmit}>
          <Row className=" d-flex justify-content-around flex-row">
            <Col md="10">
              <Form.Control ref={strRef} placeholder="Search by title" />
            </Col>
            <Col md="2">
              <div className="d-grid">
                <Button variant="warning" type="submit">
                  Search Movie
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Row>

      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          {error && <Alert variant="danger">Movie Not Found!!!</Alert>}
          {searchedMovie.imdbID && (
            <MovieCard
              searchedMovie={searchedMovie}
              func={movieMode}
              removeMovie={removeMovie}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};
