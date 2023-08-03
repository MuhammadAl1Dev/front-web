import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/editpage.css";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  LeftOutlined
} from "@ant-design/icons";
import { message } from "antd";

function UzbEditPage() {
  const [newsUzb, setNewsUzb] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'News o`chirildi, sahifani yangilang',
    });
  };


  const navigate = useNavigate();

  function goBack(){
    navigate(-1);
  }

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

  // deleteNews
  async function deleteNews(id) {
    try {
      if (window.confirm("Rostdan ham bu yangilikni o`chirmoqchimisiz?")) {
        let { data } = await axios.delete(
          `http://localhost:5000/api/news-delete/${id}`
        );
        if (data.message) {
          success();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {contextHolder}
      <div id="main_allnews_div">
        <div id="mini_allnews_div">
          <div
            style={{
              textAlign: "center",
              marginTop: "5px",
              marginBottom: "10px",
            }}
          >
            <h2>Yangiliklar soni: {newsUzb.length}</h2>
          </div>
          <div id="titles_box">
            <h3>#Image</h3>
            <h3>#Title</h3>
            <h3>#About</h3>
            <h3>#Description</h3>
            <h3>#Type</h3>
            <h3>#Edit & #Delete</h3>
          </div>
          {newsUzb.map((val, idx) => {
            return (
              <div key={idx} id="card_allnews_div">
                <img
                  src={`http://localhost:5000/api/news-img/${val._id}`}
                  alt=""
                />
                <p>{val.news_title.slice(0, 10)}...</p>
                <p>{val.news_about.slice(0, 10)}...</p>
                <p>{val.news_desc.slice(0, 10)}...</p>
                <p>{val.news_type}</p>
                <div id="edi_delete_spans">
                  <Link to={`/edit-news/${val._id}`} style={{textDecoration:"none", color:"black"}}>
                    <span id="first_span">
                      <FormOutlined />
                    </span>
                  </Link>
                  <span id="second_span" onClick={() => deleteNews(val._id)}>
                    <DeleteOutlined />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button id="go_back_button_one" onClick={()=>goBack()}><LeftOutlined /></button>

      <footer style={{ marginTop: "50px" }}>
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

export default UzbEditPage;
