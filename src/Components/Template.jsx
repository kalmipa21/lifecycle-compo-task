import { Card, Button, Col } from "react-bootstrap";
import "./Datas";

function Template({ titles, descriptions, date, urls, urlToImages }) {
  return (
    <>
      <Col md={4} sm={6} xl={2} none={12} className="mb-4 d-flex">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={urlToImages} alt="" />
          <Card.Body>
            <Card.Title className="searchable">
              <a href={urls}>{titles}</a>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted searchable">
              {date}
            </Card.Subtitle>
            <Card.Text>{descriptions}</Card.Text>
            <Button href={urls} variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Template;

// import { Image, Button } from "react-bootstrap";
// export function FSearch() {
//   let input = document.getElementById("searchbar").value;
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName("searchable");
//   let i = 0;
//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = "none";
//     } else {
//       x[i].style.display = "";
//     }
//   }
// }
//
