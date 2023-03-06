import React from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <section className="header">
      <Link to='/'>
      <div className="header-title">
        <h1>header</h1>
        <h3>subheader</h3>
      </div>
      </Link>
      <Searchbar />
      <div className="new-quiz">
        <Link to='/quizes/new'>
        <button>
          <BsPlus />
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
