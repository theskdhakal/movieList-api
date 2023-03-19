import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

export const Display = () => {
  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5 gap-2">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="success">Right</Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col className="d-flex justify-content-center">
          <MovieCard />
        </Col>
      </Row>
    </div>
  );
};
