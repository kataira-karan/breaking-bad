import { React, useState, useEffect } from "react";
import Card1 from "./Card1";
import "../styles/HomeStyle.css";
import Nav from "./Nav";
import LandingPage from "./LandingPage";

const Home = () => {
  const [apiInfo, setapiInfo] = useState([]);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setapiInfo(data);
        console.log(apiInfo);
      });
  }, []);

  return (
    <div className="home-container" id="home-container">
      <LandingPage></LandingPage>
      {/* <Nav></Nav> */}
      <div className="all-character-container">
        {apiInfo.map((c) => {
          return (
            <Card1
              id={c.id}
              name={c.name}
              nickName={c.nickname}
              occupation={c.occupation}
              status={c.status}
              imageLink={c.img}
            ></Card1>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
