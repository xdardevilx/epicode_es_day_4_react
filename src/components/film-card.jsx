import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function FilmCardComponent(props) {
  let film = props.film;
  const navigate = useNavigate();

  const saveId = () => {
    navigate(`movieDetails/${film.imdbID}`);
  };

  return (
    <Card
      className="bg-dark text-white"
      onClick={() => {
        saveId();
      }}>
      <Card.Img src={film.Poster} alt="Card image" height={400} />
      {/* <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay> */}
    </Card>
  );
}

export default FilmCardComponent;
