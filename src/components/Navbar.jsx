import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className="main_box">
        <div className="mini_box_1">
          <div id="homeLink_box">
            <div id="homeLink_box_anim">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <h3>
                  NEWS.<span>UZ</span>
                </h3>
              </Link>
            </div>
          </div>

          <div className="mini_box_links">
            <Link
              id="uzb_link_div"
              to={"/ozbekiston"}
              style={{ textDecoration: "none", margin: "0px 10px" }}
            >
              <h3>O'ZBEKISTON</h3>
              <div id="uzb_link"></div>
            </Link>

            <Link
              id="jahon_link_div"
              to={"/jahon"}
              style={{ textDecoration: "none", margin: "0px 10px" }}
            >
              <h3>JAHON</h3>
              <div id="jah_link"></div>
            </Link>

            <Link
              id="fan_link_div"
              to={"/fan-texnika"}
              style={{ textDecoration: "none", margin: "0px 10px" }}
            >
              <h3>FAN-TEXNIKA</h3>
              <div id="fan_link"></div>
            </Link>

            <Link
              id="sport_link_div"
              to={"/sport"}
              style={{ textDecoration: "none", margin: "0px 10px" }}
            >
              <h3>SPORT</h3>
              <div id="sport_link"></div>
            </Link>
          </div>
        </div>

        <div className="search_box">
          <form>
            <input type="text" placeholder="Qidiruv" onChange={(e)=>setSearch(e.target.value)} className="search_input" />
            <i className="material-icons" id="search_icon">search</i>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
