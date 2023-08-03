import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/uzbpage.css";
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function Ozbekiston() {
  const [newsUzb, setNewsUzb] = useState([]);

  // useEffect
  useEffect(() => {
    getUzbNews();
  }, []);

  // get uzb
  async function getUzbNews() {
    try {
      let { data } = await axios.get("http://localhost:5000/api/news-list/uzb");
      setNewsUzb(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div id="main_uzb_box">
        <div id="uz_news_title">
          <h2>O'ZBEKISTON YANGILIKLARI</h2>
          <div></div>
        </div>
        <div id="mini_uzb_box">
          {newsUzb.map((val, idx) => {
            return (
              <div id="card_uzb_boxs" key={idx}>
                <Link to={`/news-one/${val._id}`}>
                  <img
                    src={`http://localhost:5000/api/news-img/${val._id}`}
                    alt="img"
                  />
                </Link>
                <p>{val.createdAt.slice(0, 10)}</p>
                <div id="uzb_line_div"></div>
                <Link
                  to={`/news-one/${val._id}`}
                  style={{ textDecoration: "none" }}
                >
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

export default Ozbekiston;
