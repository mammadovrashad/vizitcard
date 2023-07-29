import React from "react";
import { useContext,memo} from "react";
import { store } from "../context/store";

const FirstCard = () => {
  const { image } = useContext(store);

  return (
    <div className="card">
      <div
        className="img-card"
        style={{ backgroundImage: "url(" + image[0] + ")" }}
      ></div>
    </div>
  );
};

export default memo(FirstCard);
