import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/newsonepage.css";
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ArrowLeftOutlined,
  ArrowUpOutlined
} from "@ant-design/icons";

function NewsOnePage() {
  const [oneNews, setOneNews] = useState([]);
  const [newsJahon, setNewsJahon] = useState([]);
  const { news_id } = useParams();

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    getOneNews();
    getJahonNews();
  }, []);

  // get One
  async function getOneNews() {
    try {
      let { data } = await axios.get(
        `http://localhost:5000/api/news-list/${news_id}`
      );
      setOneNews(data);
    } catch (error) {
      console.log(error);
    }
  }

  // get jahon
  async function getJahonNews() {
    try {
      let { data } = await axios.get(
        "http://localhost:5000/api/news-list/jahon"
      );
      setNewsJahon(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(oneNews);
  return (
    <>
      <div className="main_onenews_div">
        <div className="mini_onenews_div_1">
          {oneNews.map((val, idx) => {
            return (
              <div key={idx} id="card_onenews_div">
                <p>{val.createdAt.slice(0, 10)}</p>
                <h1>{val.news_title}</h1>
                <h2>{val.news_about}</h2>
                <img
                  src={`http://localhost:5000/api/news-img/${val._id}`}
                  alt="img"
                />
                <h3>{val.news_desc}</h3>
              </div>
            );
          })}
        </div>
        <div className="mini_onenews_div_2">
          <div className="mini_cards_jahon_api_box">
            <div>
              <h3>
                <span id="sport_span"></span> Tavsiya etamiz
              </h3>

              <div id="api_jahon_box">
                {newsJahon.slice(0, 5).map((val, idx) => {
                  return (
                    <div id="api_sport">
                      <p style={{ marginBottom: "10px" }}>
                        {val.createdAt.slice(0, 10)}
                      </p>
                      <Link
                        to={`/news-one/${val._id}`}
                        style={{ textDecoration: "none" }}
                      >
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
      <button onClick={goBack} id="goback_button">
        <ArrowLeftOutlined />
      </button>

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
            <a
              href="https://www.facebook.com/muhammadali.qahhorov.58"
              target="_blanck"
            >
              <FacebookOutlined />
            </a>
            <a href="https://github.com/MuhammadAl1Dev" target="_blanck">
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadali-kahhorov"
              target="_blanck"
            >
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NewsOnePage;
