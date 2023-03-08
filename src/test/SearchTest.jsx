import React, { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";

export default function SearchTest() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) !== -1;
    });
    setFilteredData(result);
  };
  useEffect(() => {
    axios(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=014d88281c274744b9b81b6aecf1c4cb"
    )
      .then((response) => {
        console.log(response.data.articles);
        setAllData(response.data.articles);
        setFilteredData(response.data.articles);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  return (
    <>
      <div className="d-flex">
        <input
          className="container-fluid mb-4 rounded-2"
          placeholder="Search your news..."
          type="text"
          onKeyUp={(event) => handleSearch(event)}
        />
      </div>
      <div style={{ padding: 10 }}>
        {filteredData.map((value) => {
          return (
            <div key={value.id}>
              <Col md={4} sm={6} xl={2} none={12} className="mb-4 d-flex">
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={value.urlToImage} alt="" />
                  <Card.Body>
                    <Card.Title className="searchable">
                      <a href={value.url}>{value.title}</a>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted searchable">
                      {value.publishedAt}
                    </Card.Subtitle>
                    <Card.Text>{value.description}</Card.Text>
                    <Button className="" href={value.url} variant="primary">
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          );
        })}
      </div>
    </>
  );
}
