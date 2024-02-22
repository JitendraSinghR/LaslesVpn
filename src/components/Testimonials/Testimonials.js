import React, { useState, useRef } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const testimonialRef = useRef(null);

  const scrollLeft = () => {
    const newPosition = scrollPosition - 380;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
    setActiveCardIndex(Math.max(activeCardIndex - 1, 0));
  };

  const scrollRight = () => {
    const container = testimonialRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = scrollPosition + 380;
    setScrollPosition(newPosition > maxScroll ? maxScroll : newPosition);
    setActiveCardIndex(Math.min(activeCardIndex + 1, 2));
  };

  return (
    <div id="testimonials-section">
      <center id="testimonials-head-section">
        <h2>Trusted by Thousands of Happy Customers</h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this amazing feature.
        </p>
      </center>
      <div
        id="testimonials-card-container"
        ref={testimonialRef}
        style={{ overflowX: "hidden" }}
      >
        <div
          id="testimonials-card"
          style={{
            display: "flex",
            transform: `translateX(${-scrollPosition}px)`,
          }}
        >
          <div
            className={`test-card ${activeCardIndex === 0 ? "c-active" : ""}`}
          >
            <div className="testimonial-img">
              <div className="testimonial-head">
                <img
                  src="../images/imgs/testimonials_img1.png"
                  alt="person1_img"
                ></img>
                <div>
                  <h5>Viezh Robert</h5>
                  <p>Warsaw, Poland</p>
                </div>
              </div>
              <div className="testimonial-rating">
                <p>4.5</p>
                <img src="../images/logo/star_logo.png" alt="star_logo"></img>
              </div>
            </div>
            <div className="testimonial-para">
              <p>
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
          </div>

          <div
            className={`test-card ${activeCardIndex === 1 ? "c-active" : ""}`}
          >
            <div className="testimonial-img">
              <div className="testimonial-head">
                <img
                  src="../images/imgs/testimonials_img2.png"
                  alt="person2_img"
                ></img>
                <div>
                  <h5>Yessica Christy</h5>
                  <p>Shanxi, China</p>
                </div>
              </div>
              <div className="testimonial-rating">
                <p>4.5</p>
                <img src="../images/logo/star_logo.png" alt="star_logo"></img>
              </div>
            </div>
            <div className="testimonial-para">
              <p>
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </p>
            </div>
          </div>

          <div
            className={`test-card ${activeCardIndex === 2 ? "c-active" : ""}`}
          >
            <div className="testimonial-img">
              <div className="testimonial-head">
                <img
                  src="../images/imgs/testimonials_img3.png"
                  alt="person3_img"
                ></img>
                <div>
                  <h5>Kim Young Jou</h5>
                  <p>Seoul, South Korea</p>
                </div>
              </div>
              <div className="testimonial-rating">
                <p>4.5</p>
                <img src="../images/logo/star_logo.png" alt="star_logo"></img>
              </div>
            </div>
            <div className="testimonial-para">
              <p>
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="lr-navigation-section">
        <button onClick={scrollLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="black"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <button onClick={scrollRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
