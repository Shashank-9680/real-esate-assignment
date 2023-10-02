import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { BsPeopleFill, BsSpeedometer } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiBed, BiBath, BiCurrentLocation } from "react-icons/bi";
import "./PropertyCard.css";
// import "./CarCard.css";
function PropertyCard({ property }) {
  return (
    <Card style={{ marginBottom: "20px" }} key={property.id}>
      <Link to={`/property/${property.id}`}>
        <Card.Img
          variant="top"
          src={property.image}
          height={"230px"}
          width={"350px"}
          style={{ objectFit: "cover" }}
        />
      </Link>
      <Card.Body>
        <div className="name-date">
          {/* <Card.Title>{car.make}</Card.Title> */}
          <Card.Text>
            <FaLocationDot></FaLocationDot> 8558 pecans Street
          </Card.Text>
        </div>
        <div className="property-info">{property.description}</div>
        <div className="info-container">
          <div className="room">
            {" "}
            <MdOutlineBedroomChild color="#87CEEB"></MdOutlineBedroomChild> 4
            people
          </div>
          <div className="bed">
            <BiBed color="#87CEEB"></BiBed> hybrid
          </div>

          <div className="bath">
            <BiBath color="#87CEEB"></BiBath> 6.1km/1-litre
          </div>
          <div className="sqfeet">
            <BiCurrentLocation color="#87CEEB"></BiCurrentLocation> Automatic
          </div>
        </div>

        <div className="price-rent">
          <Card.Title>$440 /month</Card.Title>
          <div className="icon-rent">
            {" "}
            <div className="heart-icon">
              <AiOutlineHeart color="#87CEEB"></AiOutlineHeart>
            </div>
            <Button variant="primary">Read More</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PropertyCard;
