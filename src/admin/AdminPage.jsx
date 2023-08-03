import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/adminformpage.css";
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { message } from "antd";

function AdminPage() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("ozbekiston");
  const [img, setImg] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "News yaratildi",
    });
  };

  // newsRequest
  async function newsRequest(e) {
    e.preventDefault();
    try {
      let formdata = new FormData();
      formdata.append("news_title", title);
      formdata.append("news_about", about);
      formdata.append("news_desc", desc);
      formdata.append("news_type", type);
      formdata.append("news_img", img);
      let { data } = await axios.post(
        "http://localhost:5000/api/news-post",
        formdata
      );
      if (data.error) {
        window.alert(data.error);
      } else {
        setTitle("");
        setAbout("");
        setDesc("");
        success();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {contextHolder}
      <div className="main_form_box">
        <div className="mini_form_box">
          <form onSubmit={newsRequest}>
            <div className="mini_input_box">
              <div>
                <p style={{ color: "black", fontSize: "18px" }}>Title</p>
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <p style={{ color: "black", fontSize: "18px" }}>About</p>
                <textarea
                  type="text"
                  placeholder="Enter about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
              <div>
                <p style={{ color: "black", fontSize: "18px" }}>Description</p>
                <textarea
                  type="text"
                  placeholder="Enter description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div>
                <p
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  Type
                </p>
                <select
                  id="select_input"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="ozbekiston">O'zbekiston</option>
                  <option value="jahon">Jahon</option>
                  <option value="fantexnika">Fan-Texnika</option>
                  <option value="sport">Sport</option>
                </select>
              </div>
            </div>

            <div className="mini_im_box">
              <div id="img_div" style={{ textAlign: "center" }}>
                <label style={{ textAlign: "center" }}>
                  <p style={{ textAlign: "center" }}>
                    {img.name ? img.name : "Add a photo"}
                  </p>
                  <input
                    type="file"
                    hidden
                    placeholder="Enter image"
                    className="img_input"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </label>
              </div>
              <div id="img_box">
                {img && (
                  <div>
                    <img src={window.URL.createObjectURL(img)} alt="" />{" "}
                  </div>
                )}
              </div>
              <button className="submit_button" onClick={newsRequest}>
                Create news
              </button>
            </div>
          </form>
        </div>

        <Link to={"/all-news-list"}>
          <button id="edit_news_path_button">Yangiliklarni o'zgartirish</button>
        </Link>
      </div>

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

export default AdminPage;
