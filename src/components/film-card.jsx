import Card from "react-bootstrap/Card";

function FilmCardComponent(props) {
  let film = props.film;
  console.log(film);
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={film.Poster} alt="Card image" />
      {/* <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay> */}
    </Card>
  );
}

export default FilmCardComponent;
