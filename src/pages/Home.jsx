import React from "react";
import SecondCard from "../components/SecondCard";
import FirstCard from "../components/FirstCard";
import Form from "../components/Form";
// import { FaIcons } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="container">
      <aside className="aside">
        <Form />
      </aside>
      <section className="section">
        <FirstCard />
        <SecondCard />
      </section>
    </div>
  );
};

export default Home;
