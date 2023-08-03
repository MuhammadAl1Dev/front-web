import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/homeOne.css";
import { Link } from "react-router-dom";
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function HomeOne() {
  const [newsUzb, setNewsUzb] = useState([]);
  const [newsSport, setNewsSport] = useState([]);
  const [newsFanTexnika, setNewsFanTexnika] = useState([]);

  useEffect(() => {
    getUzNews();
    getSportNews();
    getFanTexnikaNews();
  }, []);

  // get uzb
  async function getUzNews() {
    try {
      let { data } = await axios.get("http://localhost:5000/api/news-list/uzb");
      setNewsUzb(data);
    } catch (error) {
      console.log(error);
    }
  }

  // get sport
  async function getSportNews() {
    try {
      let { data } = await axios.get(
        "http://localhost:5000/api/news-list/sport"
      );
      setNewsSport(data);
    } catch (error) {
      console.log(error);
    }
  }

  // get fantexnika
  async function getFanTexnikaNews() {
    try {
      let { data } = await axios.get(
        "http://localhost:5000/api/news-list/fan-texnika"
      );
      setNewsFanTexnika(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="main_box_one">
        <div className="main_box_two">
          <div id="mini_api_box">
            {newsUzb.slice(0, 2).map((val, idx) => {
              return (
                <div id="api_box" key={idx}>
                  <div>
                    <Link to={`/news-one/${val._id}`}>
                      <img
                        src={`http://localhost:5000/api/news-img/${val._id}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div>
                    <div id="createdat_div">{val.createdAt.slice(0, 10)}</div>
                    <Link to={`/news-one/${val._id}`} style={{ textDecoration: "none" }}>
                      <div id="title_div">
                        <h2>{val.news_title}</h2>
                      </div>
                    </Link>
                    <Link to={`/news-one/${val._id}`} style={{ textDecoration: "none" }}>
                      <div id="about_div">
                        <h4>{val.news_about}</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mini_cards_api_box">
            <div>
              <h3>
                <span id="sport_span"></span> Sport yangiliklari
              </h3>

              <div id="api_sport_box">
                {newsSport.slice(0, 5).map((val, idx) => {
                  return (
                    <div id="api_sport">
                      <p style={{ marginBottom: "10px" }}>
                        {val.createdAt.slice(0, 10)}
                      </p>
                      <Link to={`/news-one/${val._id}`} style={{ textDecoration: "none" }}>
                        <h3>{val.news_title}.</h3>
                      </Link>
                      <div id="sport_line_div"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fantex_main_box">
        <div id="title_fantex_div">
          <h1>Fan-Texnika</h1>
          <div></div>
        </div>
        <div id="fantex_mini_box">
          {newsFanTexnika.slice(0, 9).map((val, idx) => {
            return (
              <div id="card_fantex_boxs">
                <Link to={`/news-one/${val._id}`}>
                  <img src={`http://localhost:5000/api/news-img/${val._id}`} />
                </Link>
                <p>{val.createdAt.slice(0, 10)}</p>
                <div id="fan_line_div"></div>
                <Link to={`/news-one/${val._id}`} style={{ textDecoration: "none" }}>
                  <h3>{val.news_title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <footer>
        <div id="footer_main_div">
          <div>
            <h2>Muhammadali Qahhorov</h2>
          </div>

          <div id="icons_div">
            <a href="https://t.me/muhammadali_kahhorov" target="_blanck">
              <SendOutlined />
            </a>
            <a href="https://www.instagram.com/kahhorov_1/" target="_blanck">
              <InstagramOutlined />
            </a>
            <a href="https://www.facebook.com/muhammadali.qahhorov.58" target="_blanck">
              <FacebookOutlined />
            </a>
            <a href="https://github.com/MuhammadAl1Dev" target="_blanck">
              <GithubOutlined />
            </a>
            <a href="https://www.linkedin.com/in/muhammadali-kahhorov" target="_blanck">
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeOne;
