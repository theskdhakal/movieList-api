import { createContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [movieList, setMovieList] = useState([]);

  const addMovieToList = (movie) => {
    const tempArg = movieList.filter((itme) => itme.imdbID !== movie.imdbID);
    setMovieList([...tempArg, movie]);
  };

  const handleOnDelete = (imdbID) => {
    if (window.confirm("Remove the movie from List?")) {
      setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="wrapper" id={theme}>
        <Container>
          <div className="d-flex justify-content-end align-items-end gap-1">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <Row>
            <Col>
              <h1 className="text-center mt-5">
                MovieList Generator{" "}
                <span>
                  <i class="fa-solid fa-film"></i>
                </span>
              </h1>
            </Col>
          </Row>
          <hr />

          <SearchForm addMovieToList={addMovieToList} />
          <hr />
          <Display movieList={movieList} handleOnDelete={handleOnDelete} />
        </Container>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
