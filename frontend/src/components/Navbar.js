import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Navbar extends Component {
  state = {
    menuSet: false,
  };

  handleToggle = () => {
    this.setState({
      menuSet: !this.state.menuSet,
    });
  };

  render() {
    return (
      <NavWrap>
        <div className="navbar-container">
          <div className="nav-logo">
            <Link to="/">
              <h2>Epsilon Electronics</h2>
            </Link>
          </div>

          <ul
            className={
              this.state.menuSet ? "nav-left-menu nav-show" : "nav-left-menu"
            }
          >
            <div className="list-group" onClick={this.handleToggle}>
              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>
            </div>
          </ul>

          <ul className="right-nav-menu">
            <div>
              <Link to="/cart">
                <i
                  class="fas fa-shopping-cart"
                  aria-hidden="true"
                  id="btn-cart"
                ></i>
              </Link>
            </div>
            <button
              type="button"
              onClick={this.handleToggle}
              className="nav-btn"
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
          </ul>
        </div>
      </NavWrap>
    );
  }
}

const NavWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--bg-primary);
  padding: 22px;
  z-index: 30;
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .navbar-container a {
    color: var(--bg-secondary);
    text-decoration: none;
  }

  .navbar-container a:hover {
    color: rgb(255, 243, 243);
  }

  .navbar-container ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .nav-left-menu {
    text-transform: uppercase;
    flex: 1;
    margin-left: 50px;
  }
  .nav-right-menu {
    display: flex;
    align-items: center;
  }

  .list-group {
    display: flex !important;
    flex-direction: row;
    margin-top: 10px;
  }

  .list-group a {
    margin-right: 30px;
  }

  .nav-btn {
    background-color: var(--bg-primary);
    color: var(--bg-secondary);
    border: none;
    display: none;
    margin-top: 10px;
  }
  .nav-btn i {
    font-size: 30px;
    margin-top: 10px;
  }
  i {
    font-size: 20px;
    margin-right: 25px;
  }
  #btn-cart {
    margin-top: 16px;
    font-size: 22px;
  }
  @media (max-width: 960px) {
    .nav-btn {
      display: block;
    }
    .nav-left-menu {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 80px;
      width: 100%;
      height: 100%;
      left: -100%;
      background-color: #333;
      margin-left: 0 !important;
      z-index: 10;
      opacity: 1;
    }

    .nav-show {
      left: 0;
    }

    .navbar-container a {
      transition: var(--mainTransition);
    }

    .list-group {
      margin: 50% auto;
      display: flex;
      flex-direction: column;
    }

    .list-group a {
      font-size: 20px;
      padding: 20px;
    }
  }
`;
