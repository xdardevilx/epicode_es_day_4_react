import { Col, Container, Row, Spinner } from "react-bootstrap";
import FilmCardComponent from "./film-card";
import { Component } from "react";
import searchAPI from "../data/search.api";

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchText: props.searchText,
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.loading(true);
    let films = await searchAPI(this.state.searchText);
    this.setState({ films: films.Search });
    this.loading(false);
  }

  loading(bool) {
    this.setState({
      isLoading: bool,
    });
  }

  render() {
    return (
      <>
        <Container className="my-5">
          <h4>{this.state.searchText.toUpperCase()}</h4>
          <Row>
            {this.state.isLoading &&
              <Col lg={12} className="text-center">
                <Spinner
                  style={{ width: "7rem", height: "7rem" }}
                  className="m-5"
                  animation="border"
                  variant="danger"
                />
              </Col>
            }
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
