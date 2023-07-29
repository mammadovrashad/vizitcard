import React from "react";
import { useContext,memo} from "react";
import { store } from "../context/store";

const FirstCard = () => {
  const { image } = useContext(store);
  const url=image??image[0]
  return (
    <div className="card">
      <div
        className="img-card"
        style={{ backgroundImage: "url(" + url + ")" }}
      ></div>
    </div>
  );
};

export default memo(FirstCard);
