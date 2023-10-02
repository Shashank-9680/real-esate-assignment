import React, { useState } from "react";
import CityTabs from "./components/CityTabs";
import properties from "./data";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Home.css";
import PropertyCard from "./components/PropertyCard";

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [propertiesToShow, setPropertiesToShow] = useState(6);

  const handleToggleLoadMore = () => {
    if (propertiesToShow === 6) {
      setPropertiesToShow(propertiesToShow + 3);
    } else {
      setPropertiesToShow(propertiesToShow - 3);
    }
  };

  const filteredProperties = properties.filter(
    (property) => property.city === `City ${activeTab + 1}`
  );

  return (
    <div className="full-container">
      <div className="heading">
        <h1>Featured Listed Property</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Blanditiis voluptas quos, eaque quaerat vel nam placeat quam omnis?
          Qui, magni!
        </p>
      </div>
      <div className="city-container">
        <CityTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <button className="tab">View All</button>
      </div>

      <Container>
        <Row>
          {filteredProperties
            .slice(0, propertiesToShow)
            .map((property, index) => (
              <Col md={6} key={index}>
                <PropertyCard property={property} />
              </Col>
            ))}
        </Row>
      </Container>
      <Container className="show-more-container">
        {propertiesToShow < filteredProperties.length && (
          <button className="show-more" onClick={handleToggleLoadMore}>
            {propertiesToShow === 6 ? "Show More" : "Show Less"}
          </button>
        )}
      </Container>
    </div>
  );
}

export default HomePage;
