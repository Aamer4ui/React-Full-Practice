import React from "react";
import "../Header/Header.css";
import { Carousel } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Carousel className="display">
        <Carousel.Item>
          <img
            className=" display d-block w-100"
            src="images/image1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best View</h3>
            <p>Mount House</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className=" display d-block w-100"
            src="images/image2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best Photoshoot</h3>
            <p>Hight Config DSLR</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className=" display d-block w-100"
            src="images/image3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Best Ride</h3>
            <p>Air Ride</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
