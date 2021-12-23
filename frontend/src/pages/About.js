import React from "react";
import styled from "styled-components";
import office from "../images/office.jpg";
import gaming from "../images/gaming.jpg";
import accessories from "../images/accessories.jpg";
import repair from "../images/repair.jpg";
import support from "../images/support.jpg";
import mission from "../images/mission.jpg";

export default function About() {
  return (
    <AboutStyled>
      <div className="about-section">
        <div className="page-title">
          <h2>About Us</h2>
        </div>
        <div className="about-info">
          <div className="about-text">
            <p>
              Epsilon Electronics was founded in 2012 in Serbia by a group of
              industry veterans using their vast experience to create various
              advanced security, communication and automation solutions.
            </p>
            <p>
              In Epsilon Electronics we believe ina world where connection
              people with brilliant tecnology Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate, laudantium? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Minima, id.
            </p>
            <p>
              Undestanding technlogy opens the door to a world of creative
              possibilities. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sint eos omnis rem illum facilis corrupti a incidunt
              deserunt nostrum iusto?
            </p>
          </div>
          <div className="about-img">
            <img src={office} alt="epsilon office" />
          </div>
        </div>
      </div>
      {/* section 1 end */}
      <div className="about-categories">
        <div className="page-title">
          <h2>What we offer</h2>
        </div>
        <div className="categories">
          {/* category column start */}
          <div className="category-column">
            <img src={gaming} alt="" />
            <h3>Computing and Gaming</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              molestias culpa neque dolores non cupiditate, enim sequi eos
              assumenda ullam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea, odit?
            </p>
          </div>
          {/* category column end */}

          {/* category column start */}
          <div className="category-column">
            <img src={accessories} alt="" />
            <h3>Accesories</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              molestias culpa neque dolores non cupiditate, enim sequi eos
              assumenda ullam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea, odit?
            </p>
          </div>
          {/* category column end */}

          {/* category column start */}
          <div className="category-column">
            <img src={repair} alt="" />
            <h3>Computer Repair</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              molestias culpa neque dolores non cupiditate, enim sequi eos
              assumenda ullam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea, odit?
            </p>
          </div>
          {/* category column end */}

          {/* category column start */}
          <div className="category-column">
            <img src={support} alt="" />
            <h3>Tech support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              molestias culpa neque dolores non cupiditate, enim sequi eos
              assumenda ullam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea, odit?
            </p>
          </div>
          {/* category column end */}
        </div>
        {/* categories end */}
      </div>

      <div className="about-section">
        <div className="page-title">
          <h2 id="mission">Our mission</h2>
        </div>
        <div className="about-info">
          <div className="about-img">
            <img src={mission} alt="epsilon office" />
          </div>
          <div className="about-text">
            <p>
              Epsilon Electronics was founded in 2012 in Serbia by a group of
              industry veterans using their vast experience to create various
              advanced security, communication and automation solutions.
            </p>
            <p>
              In Epsilon Electronics we believe ina world where connection
              people with brilliant tecnology Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate, laudantium? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Minima, id.
            </p>
            <p>
              Undestanding technlogy opens the door to a world of creative
              possibilities. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sint eos omnis rem illum facilis corrupti a incidunt
              deserunt nostrum iusto?
            </p>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  .about-section {
    padding: 20px 0;
  }
  .page-title {
    width: 95vw;
    max-width: 1200px;
    margin: 25px auto;
  }

  .about-info {
    width: 95vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .about-info p {
    color: #333;
  }

  .about-categories {
    margin: 20px 0 0 0;
    padding: 30px 0 60px 0;
    background-color: var(--bg-primary);
  }
  .about-categories h2,
  h3,
  p {
    color: var(--bg-secondary);
  }
  .about-categories h3 {
    margin: 12px 0;
  }
  .about-categories img {
    height: 180px;
    border-radius: 5px;
  }
  .categories {
    width: 95vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  h2#mission {
    padding-bottom: 14px;
  }

  @media (max-width: 960px) {
    .about-info {
      grid-template-columns: 1fr;
    }
    .about-text {
      padding: 10px;
    }
    .about-img {
      padding: 10px;
    }
    .categories {
      grid-template-columns: 1fr 1fr;
    }
    .category-column {
      max-width: 300px;
    }
  }
  @media (max-width: 768px) {
    .categories {
      grid-template-columns: 1fr;
    }
    .category-column {
      max-width: 400px;
      margin: 0 auto;
    }
    .about-categories img {
      height: auto;
      border-radius: 5px;
    }
    .page-title h2,
    .about-info h2 {
      text-align: center;
    }
  }
`;
