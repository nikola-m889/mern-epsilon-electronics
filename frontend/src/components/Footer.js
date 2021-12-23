import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyled";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        {/* first ul */}
        <ul>
          <li>
            <h3>Epsilon Group</h3>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">Selected Work</Link>
          </li>
          <li>
            <Link to="/contact">Get in Touch</Link>
          </li>
        </ul>
        {/* second ul */}
        <ul>
          <li>
            <h3>Recent News</h3>
          </li>
          <li>
            <p>
              Epsilon Electronics as established company participates in annual
              international Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odio, nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              ab illo fugit magni eos voluptatem.
            </p>
          </li>
        </ul>
        {/* Third ul */}
        <ul>
          <li>
            <h3>Visit Us</h3>
          </li>
          <li>
            {/* map start */}
            <iframe
              title="epsilon electronics"
              src="https://maps.google.com/maps?q=Belgrade,%20Senjak,%20Kozjacka%207&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="260px"
              height="255"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            {/* map end */}
          </li>
        </ul>
        {/* forth ul */}
        <ul>
          <li>
            <h3>Contact us</h3>
          </li>
          <li>
            <form action="https://formspree.io/f/xdobonko" method="POST">
              <input
                type="email"
                name="_replyto"
                placeholder="Email"
                required
              />
              <br></br>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <br></br>
              <ButtonStyled type="submit">Send message</ButtonStyled>
            </form>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  margin-top: 80px;
  bottom: 0 !important;
  padding: 70px 40px;
  background: var(--bg-primary);
  color: var(--bg-secondary);
  .footer-container {
    width: 85vw;
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    gap: 50px;
  }
  .footer-container ul {
    list-style: none;
  }
  .footer-container ul li a {
    color: var(--bg-secondary);
  }
  .footer-container h3 {
    padding-bottom: 20px;
  }
  .footer-container p {
    padding-bottom: 20px;
    overflow: hidden;
  }
  form input {
    width: 239px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 4px;
  }
  form textarea {
    margin-bottom: 10px;
    width: 239px;
    padding: 10px 0;
    border-radius: 4px;
  }
  @media (max-width: 1200px) {
    .footer-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 960px) {
    .footer-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
    }
    iframe {
      width: 90%;
    }

    form input {
      width: 90%;
    }
    form textarea {
      width: 90%;
    }
  }
`;
