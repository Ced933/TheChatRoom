import React from "react";
import "./Home.scss";

export default function Home() {
  let time = new Date();
  let arrayDate = time.toISOString().split("T");
  let hour = arrayDate[1].slice(0, -11);

  return (
    <div className="container-home">
      <div className="home-box">
        <h1>
          {hour < "14" ? "Bonjour" : "Bonsoir"}, <br />
          Bienvenue sur ChatRooms
        </h1>
      </div>
    </div>
  );
}
