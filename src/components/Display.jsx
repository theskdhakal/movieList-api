import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);
  console.log(displayList);
  const handleOnFilter = (str) => {
    let tempArg =
      str === "all" ? movieList : movieList.filter((item) => item.mode === str);
    setDisplayList(tempArg);
  };

  return (
    <div className="abc p-5 rounded shadow-lg mt-5 gap-2 mb-2 ">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => handleOnFilter("all")} variant="primary">
            All
          </Button>
          <Button onClick={() => handleOnFilter("happy")} variant="secondary">
            Happy
          </Button>
          <Button onClick={() => handleOnFilter("sad")} variant="warning">
            Sad
          </Button>
          <Button onClick={() => handleOnFilter("lazy")} variant="info">
            Lazy
          </Button>
        </ButtonGroup>
      </div>
      <div className="py-3">{displayList.length} Movie found!</div>

      <Row>
        <Col className="d-flex justify-content-center align-items-center gap-3 flex-column">
          {displayList.map((item) => (
            <MovieCard searchedMovie={item} func={handleOnDelete} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
