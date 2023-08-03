import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { message } from "antd";

function ModalEdit() {
  const { news_id } = useParams();
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("ozbekiston");
  const [img, setImg] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "News o`zgartirildi",
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    getOneNews();
  }, []);

  function goBack() {
    navigate(-1);
  }

  // get one news
  async function getOneNews() {
    try {
      let { data } = await axios.get(
        `http://localhost:5000/api/news-list/` + news_id
      );
      if (data.error) {
        window.alert(data.error);
      } else {
        setTitle(data[0].news_title);
        setAbout(data[0].news_about);
        setDesc(data[0].news_desc);
        setType(data[0].news_type);
        success();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // newsRequest
  async function editRequest(e) {
    e.preventDefault();
    try {
      let formdata = new FormData();
      formdata.append("news_title", title);
      formdata.append("news_about", about);
      formdata.append("news_desc", desc);
      formdata.append("news_type", type);
      img && formdata.append("news_img", img);
      let { data } = await axios.put(
        "http://localhost:5000/api/news-put/" + news_id,
        formdata
      );
      if (data.error) {
        window.alert(data.error);
      }
      setTitle("");
      setAbout("");
      setDesc("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {contextHolder}
      <div className="main_form_box">
        <div className="mini_form_box">
          <form onSubmit={editRequest}>
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
                {img ? (
                  <div>
                    <img src={window.URL.createObjectURL(img)} alt="" />{" "}
                  </div>
                ) : (
                  <img src={`http://localhost:5000/api/news-img/${news_id}`} />
                )}
              </div>
              <button className="submit_button" onClick={editRequest}>
                Edit news
              </button>
            </div>
          </form>
        </div>
        <button id="go_back_button_one" onClick={() => goBack()}>
          <LeftOutlined />
        </button>
      </div>
    </>
  );
}

export default ModalEdit;
