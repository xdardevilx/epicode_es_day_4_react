import { Col, Container, Row } from "react-bootstrap";
import FilmCardComponent from "./film-card";
import { Component } from "react";
import searchAPI from "../data/search.api";

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
    };
  }

  async componentDidMount() {
    let films = await searchAPI("harry potter");
    this.setState({ films: films.Search });
  }

  render() {
    return (
      <>
        <h4>Titolo</h4>
        <Container>
          <Row>
            {this.state.films.map((film, index) => {
              return (
                index < 3 && (
                  <Col sm={12} md={6} lg={4} key={index}>
                    <FilmCardComponent film={film} />
                  </Col>
                )
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default GalleryComponent;
