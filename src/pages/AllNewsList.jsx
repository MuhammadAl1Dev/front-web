import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/adminformpage.css";
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function AllNewsList() {

  const navigate = useNavigate();

  function goBack(){
    navigate(-1);
  }

  return (
    <>
      <div id="news_list_box_one">
        <div>
          <h1>Yangiliklar bo'lmini tanlang:</h1>

          <ul>
            <Link to={"/uzb-edit-page"} style={{ textDecoration: "none" }}>
              <li>O'zbekiston</li>
            </Link>
            <Link to={"/jahon-edit-page"} style={{ textDecoration: "none" }}>
              <li>Jahon</li>
            </Link>
            <Link
              to={"/fantexnika-edit-page"}
              style={{ textDecoration: "none" }}
            >
              <li>Fan-Texnika</li>
            </Link>
            <Link to={"/sport-edit-page"} style={{ textDecoration: "none" }}>
              <li>Sport</li>
            </Link>
          </ul>
        </div>
      </div>

      <button id="back_to_button" onClick={()=>goBack()}>Orqaga</button>

      <footer style={{ marginTop: "70px" }}>
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

export default AllNewsList;
