import React from "react";
import "../styles/LandingPageStyle.css";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="landing-page-nav">
        <header>
          <span className="breakingbad-special-active">
            Br <span className="index-active">35</span>
          </span>
          eaking
          <span className="breakingbad-special-active">
            Ba<span className="index-active">56</span>
          </span>
          d
        </header>
        {/* add hydrogen - 1 */}
        <Link>
          <span className="nav-item">
            C
            <span className="breakingbad-special">
              h<span className="index">1</span>
            </span>
            aracter
          </span>
        </Link>

        {/* iodine 53 */}
        <Link to="/allepisodes">
          <span className="nav-item">
            Ep
            <span className="breakingbad-special">
              i<span className="index">53</span>
            </span>
            sodes
          </span>
        </Link>

        <Link to="/allquotes">
          <span className="nav-item">
            Qu
            <span className="breakingbad-special">
              o<span className="index">8</span>
            </span>
            tes
          </span>
        </Link>
        {/* oxygen  - 8*/}

        {/* add hydrogen - 1 */}
        <Link to="/alldeaths">
          <span className="nav-item">
            Deat
            <span className="breakingbad-special">
              h<span className="index">1</span>
            </span>
            s
          </span>
        </Link>

        <div>
          <span className="nav-item">
            <span className="breakingbad-special">
              <input type="text" name="search-bar" />
            </span>
            <button>Search</button>
          </span>
        </div>
      </div>
      <img
        className="landingpage-image"
        src="https://www.99images.com/download-image/856265/1366x768"
      ></img>
    </div>
  );
};

export default LandingPage;
