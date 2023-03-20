import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export const MovieCard = ({ searchedMovie, func, removeMovie }) => {
  return (
    <div>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={searchedMovie?.Poster}
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{searchedMovie?.Title}</Card.Title>
          <Card.Text>{searchedMovie?.Plot?.slice(0, 50)}...</Card.Text>

          {!searchedMovie.mode ? (
            <>
              <Row>
                <Col className="d-flex justify-content-between ">
                  <Button
                    onClick={() => func("happy")}
                    variant="secondary"
                    style={{ width: "5rem" }}
                  >
                    Happy
                  </Button>

                  <Button
                    onClick={() => func("sad")}
                    variant="warning"
                    style={{ width: "5rem" }}
                  >
                    Sad
                  </Button>

                  <Button
                    onClick={() => func("lazy")}
                    variant="info"
                    style={{ width: "5rem" }}
                  >
                    Lazy
                  </Button>
                </Col>
              </Row>
              <Row className="mt-1">
                <Button
                  onClick={() => removeMovie(searchedMovie.imdbID)}
                  variant="danger"
                >
                  Delete
                </Button>
              </Row>
            </>
          ) : (
            <Row className="mt-1">
              <Button
                onClick={() => func(searchedMovie.imdbID)}
                variant="danger"
              >
                Delete
              </Button>
            </Row>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
