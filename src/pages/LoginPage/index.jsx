import React from "react";

import "./styles.css";
import bg from "../../assets/bg.jpeg";

function LoginPage() {
  return (
    <div className="loginPageContainer">
      <div className="left">
        <div className="filterBg"></div>
        <img src={bg} alt="BG" className="bg" />
      </div>
      <div className="right">
        <div className="rightContent"></div>
      </div>
    </div>
  );
}

export default LoginPage;
