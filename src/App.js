import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-primary mt-5">
              MovieList Generator{" "}
              <span>
                <i class="fa-solid fa-film"></i>
              </span>
            </h1>
          </Col>
        </Row>
        <hr />

        <SearchForm />
        <hr />
        <Display />
      </Container>
    </div>
  );
}

export default App;
