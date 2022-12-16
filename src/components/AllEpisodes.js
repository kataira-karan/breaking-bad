import { React, useState, useEffect } from "react";
import Nav from "./Nav";
import "../styles/AllEpisodeStyle.css";
import loadingGIF from "../styles/loading.svg";

const AllCharacter = () => {
  const [allEpisodes, setallEpisodes] = useState([]);
  const [seasonNumber, setseasonNumber] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (seasonNumber === null) {
          setallEpisodes(data);
          setisLoading(false);
        } else {
          const x = data.filter((e) => e.season === seasonNumber);
          setallEpisodes(x);
          setisLoading(false);
          return;
        }
      });
  }, [seasonNumber]);

  return (
    <div className="all-episodes-container">
      <Nav></Nav>
      <section>
        <select
          className="season-filter"
          value={seasonNumber}
          onChange={(e) => setseasonNumber(e.target.value)}
        >
          <option value="1">Season 1 </option>
          <option value="2">Season 2 </option>
          <option value="3">Season 3 </option>
          <option value="4">Season 4 </option>
          <option value="5">Season 5 </option>
        </select>
      </section>
      {isLoading ? (
        <span className="spinner-container">
          {" "}
          <img
            src={loadingGIF}
            // style={{ height: "25vh", width: "25vw", objectFit: "cover " }}
          ></img>{" "}
        </span>
      ) : (
        <section className="all-episodes">
          {allEpisodes.map((e) => {
            return (
              <div className="episode-card" key={e.episode_id}>
                <div className="card-section">
                  {" "}
                  <span className="card-section-title">
                    {/* Season:{e.season} */}
                  </span>{" "}
                  <span
                    className="card-section-value"
                    style={{ fontSize: "1.2rem" }}
                  >
                    S{e.season}E{e.episode}
                  </span>
                </div>

                <hr></hr>

                <div className="card-section">
                  {" "}
                  <span className="card-section-title">Title</span>{" "}
                  <span
                    className="card-section-value
                  "
                  >
                    {e.title}
                  </span>
                </div>
                <div className="card-section">
                  {" "}
                  <span className="card-section-title">AIR</span>{" "}
                  <span
                    className="card-section-value
                  "
                  >
                    {e.air_date}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default AllCharacter;
