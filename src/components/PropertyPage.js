import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiBed, BiBath, BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";
import properties from "../data"; // Assuming properties is an array of property objects

const PropertyPage = () => {
  const { id } = useParams();
  console.log(id);

  // Find the property with the matching id in your data
  // const idString = id.toString();
  const property = properties.find((property) => property.id === +id);
  console.log(property);
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="page-container">
      <Card
        className="page-card"
        style={{ marginBottom: "20px" }}
        key={property.id}
      >
        <Card.Img
          variant="top"
          src={property.image}
          height={"230px"}
          width={"350px"}
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <div className="name-date">
            <Card.Text>
              <FaLocationDot /> 8558 pecans Street
            </Card.Text>
          </div>
          <div className="property-info">{property.description}</div>
          <div className="info-container">
            <div className="room">
              <MdOutlineBedroomChild color="#87CEEB" /> people people
            </div>
            <div className="bed">
              <BiBed color="#87CEEB" /> hybrid
            </div>
            <div className="bath">
              <BiBath color="#87CEEB" /> 6.1km/1-litre
            </div>
            <div className="sqfeet">
              <BiCurrentLocation color="#87CEEB" /> Automatic
            </div>
          </div>
          <div className="price-rent">
            <Card.Title>$440 /month</Card.Title>
            <div className="icon-rent">
              <div className="heart-icon">
                <AiOutlineHeart color="#87CEEB" />
              </div>
              <Button variant="primary">Read More</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PropertyPage;
