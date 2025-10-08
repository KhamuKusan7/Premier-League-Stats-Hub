import React from "react";
import "./PlayerBg.css";

const Haaland = () => {
  return (
    <div className="player-info">
      {/* Background number */}
      <h2 className="back-num">#9</h2>

      <div className="player-image">
        <img src="/images/Player_profile/ErlingHaaland.png" alt="Haaland" />
      </div>

      {/* Column Layout */}
      <div className="player-details">
        {/* Left Column */}
        <div className="left-col">
          <p>Date of Birth: 21/07/2000</p>
          <p>Position: Forward</p>
          <p>Joined Club: 2022/23</p>
          <p>Shirt Number: 9</p>
          <p>Preferred Foot: Left</p>
        </div>

        {/* Center Column */}
        <div className="center-col">
          <p><strong>Appearances:</strong> 5</p>
          <p><strong>Goals:</strong> 6</p>
          <p><strong>Minutes Played:</strong> 416</p>
        </div>

        {/* Right Column */}
        <div className="right-col">
          <h3>Attack</h3>
          <p>xG: 6.26</p>
          <p>xA: 0.47</p>
          <p>Touches in the Opposition Box: 29</p>
          <p>Hit Woodwork: 1</p>

          <h3>Physical</h3>
          <p>Duels Won: 18</p>
          <p>Aerial Duels Won: 12</p>

          <h3>Defence</h3>
          <p>Total Tackles: 1</p>

          <h3>Discipline</h3>
          <p>Red Cards: 0</p>
          <p>Yellow Cards: 0</p>
          <p>Fouls: 6</p>
        </div>
      </div>
      <p>Note: All the shown data are from Fantasy Premier League</p>
    </div>
  );
};

export default Haaland;
