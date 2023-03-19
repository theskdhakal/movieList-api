import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit>
        <Row className="gap-1 ">
          <Col md="12">
            <Form.Control placeholder="Search by title" />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Search Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
