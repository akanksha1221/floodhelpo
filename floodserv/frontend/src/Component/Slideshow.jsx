import React from 'react';
import {Carousel} from 'react-bootstrap';
import c1 from "../images/news/goi1.png";
import c2 from "../images/news/goi3.jpg";
import c3 from "../images/news/goi9.png";
import c4 from "../images/news/goi8.png";
import "../Css/Slideshow.css";
function Slideshow(){
    return(
        <>
          <div className="container slides">
          <Carousel>
            <Carousel.Item >
            <a href="https://pib.gov.in/PressReleseDetailm.aspx?PRID=1631096" target="_blank">
              <img
                className="d-block w-100 "
                src={c1}
                alt="First slide"
                
              />
            </a>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reliefweb.int/report/india/national-disaster-management-plan-november-2019" target="_blank">
              <img
                className="d-block w-100"
                src={c2}
                alt="Third slide"
              />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.researchgate.net/figure/Map-of-India-showing-the-major-rivers-and-the-flood-prone-areas-1-flood-prone-areas-2_fig1_226362274" target="_blank">
              <img
                className="d-block w-100"
                src={c3}
                alt="Third slide"
              />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.gktoday.in/gk/ndma-guidelines-on-flood-management/#:~:text=The%20state%20governments%20has%20to,to%20take%20shelter%20during%20floods." target="_blank">
              <img
                className="d-block w-100"
                src={c4}
                alt="Third slide"
              />
              </a>
            </Carousel.Item>
          </Carousel> 
          </div>
        </>
    )
}
export default Slideshow;