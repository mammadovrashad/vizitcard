import React, { useEffect, useState } from "react";
import "./form.css";
import { useContext } from "react";
import { store } from "../context/store";

const Form = () => {
  const { fileUrl, setFileUrl, setImage,image } = useContext(store);
  useEffect(() => {
    setImage(JSON.parse(localStorage.getItem("fileSrc")));
  }, []);

  const handleChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      fileUrl.push(reader.result);
      localStorage.setItem("fileSrc", JSON.stringify(fileUrl));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    setFileUrl(fileUrl);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setImage(fileUrl);
    setFileUrl([]);
  };

  return (
    <>
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball"></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"> </div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Vizitkart form</h1>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="file"
            name="first"
            required="required"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            name="second"
            type="file"
            id="file"
            required="required"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
