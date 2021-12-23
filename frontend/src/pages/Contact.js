import React from "react";
import { ButtonStyled } from "../components/ButtonStyled";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactStyled>
      <div className="contact-form">
        <h2>Contact</h2>
        <div className="underline"></div>
        <form action="https://formspree.io/f/mvolonoj" method="POST">
          <div className="form-section-info">
            <div className="form-column">
              <label htmlFor="name">Full Name*:</label>
              <input type="name" required />

              <label htmlFor="email">Your E-mail*:</label>
              <input type="email" name="_replyto" required />

              <label htmlFor="number">Phone number:</label>
              <input type="tel" name="number" />
            </div>
            <div className="form-column">
              <label htmlFor="cname">Company Name:</label>
              <input type="text" name="cname" />
              <label htmlFor="website">Website:</label>
              <input type="text" name="website" />
              <label htmlFor="phone2">Mobile phone:</label>
              <input type="tel" name="phone2" />
            </div>
          </div>
          <div className="form-section-details">
            <label htmlFor="details">Demand type / details:</label>
            <input type="text" name="details" />
            <label htmlFor="message">Full text message*:</label>
            <textarea name="message" id="message" cols="30" rows="6"></textarea>
          </div>
          <br></br>
          <ButtonStyled btnBuy type="submit">
            Send message
          </ButtonStyled>
        </form>
      </div>
      <div className="contact-info">
        <div className="contact-section">
          <h2>Where To Find Us</h2>
          <div className="underline"></div>
          <p className="text-bold">Epsilon Electronics Belgrade</p>
          <p>Kozjacka 7, Senjak</p>
          <p> 11000 Belgrade</p>
          <p>(Savski Venac) Serbia</p>
          <p className="text-bold"> Tel: +500-134-4256</p>
          <p className="text-bold">Fax: +500-134-4266</p>
          <p>
            E-mail: <span className="green-text">info@epsilon.com</span>
          </p>
        </div>
        <div className="contact-section">
          <h2>Whom To Contact</h2>
          <div className="underline"></div>
          <p>Customer Service</p>
          <p> Phone: +500-134-5555</p>
          <p>
            {" "}
            Email: <span className="green-text">info@epsilon.com</span>
          </p>
        </div>
        <div className="contact-section">
          <h2>How To Get Support</h2>
          <div className="underline"></div>
          <p>
            Web: <span className="green-text">www.epsilonelectronics.com</span>{" "}
          </p>
          <p>
            Email: <span className="green-text">support@epsilon.com</span>
          </p>
        </div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;

  .contact-form {
    padding: 20px;
  }

  .contact-info {
    padding: 20px;
  }

  .form-section-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .contact-form .underline {
    height: 5px;
    width: 15rem;
    margin: 12px 0;
    background-color: var(--bg-secondary);
  }

  .form-column {
    display: flex;
    flex-direction: column;
  }

  form textarea {
    background-color: rgb(241, 240, 240);
    border-radius: 4px;
    border: none;
  }

  form input {
    background-color: rgb(241, 240, 240);
    height: 40px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
  }

  .form-section-details {
    display: flex;
    flex-direction: column;
  }

  .contact-form h2,
  .contact-section p,
  label {
    color: #555;
  }

  .contact-section h2 {
    margin-top: 15px;
    font-size: 24px;
    color: #555;
  }

  .contact-form .underline {
    height: 5px;
    width: 15rem;
    margin: 14px 0;
    background-color: var(--bg-secondary);
  }

  .contact-section .underline {
    height: 5px;
    width: 14rem;
    margin: 14px auto;
    background-color: var(--bg-secondary);
  }

  .text-bold {
    font-weight: bold;
  }

  .green-text {
    color: rgb(94, 209, 171) !important;
    font-weight: bold;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 10px;
    .contact-section .underline {
      height: 5px;
      width: 14rem;
      margin: 12px 0;
      background-color: var(--bg-secondary);
    }
  }
`;
