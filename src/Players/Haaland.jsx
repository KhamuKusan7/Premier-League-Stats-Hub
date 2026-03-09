// import React from "react";
// import "./PlayerBg.css";

// const Haaland = () => {
//   return (
//     <div className="player-info">
//       {/* Background number */}
//       <h2 className="back-num">#9</h2>

//       {/* <div className="player-image">
//         <img src="/images/Player_profile/ErlingHaaland.png" alt="Haaland" />
//       </div> */}

//       {/* Column Layout */}
//       <div className="player-details">
//         {/* Left Column */}
//         <div className="left-col">
//           <p>Date of Birth: 21/07/2000</p>
//           <p>Position: Forward</p>
//           <p>Joined Club: 2022/23</p>
//           <p>Shirt Number: 9</p>
//           <p>Preferred Foot: Left</p>
//           <br></br>
//           <p><strong>Appearances:</strong> 11</p>
//           <p><strong>Goals:</strong> 14</p>
//           <p><strong>Minutes Played:</strong> 948</p>
//         </div>

//         {/* Center Column */}
//         <div className="center-col">
//           {/* <p><strong>Appearances:</strong> 5</p>
//           <p><strong>Goals:</strong> 6</p>
//           <p><strong>Minutes Played:</strong> 416</p> */}

//         <div className="player-image">
//         <img src="/images/Player_profile/ErlingHaaland.png" alt="Haaland" />
//       </div>
//         </div>

//         {/* Right Column */}
//         <div className="right-col">
//           <h3>Attack</h3>
//           <p>xG: 11.09</p>
//           <p>xA: 0.86</p>
//           <p>Shots On Target Inside the Box: 15</p>
//           <p>Touches in the Opposition Box: 75</p>
//           <p>Hit Woodwork: 1</p>

//           <h3>Physical</h3>
//           <p>Duels Won: 41</p>
//           <p>Aerial Duels Won: 26</p>

//           <h3>Defence</h3>
//           <p>Total Tackles: 2</p>

//           <h3>Discipline</h3>
//           <p>Red Cards: 0</p>
//           <p>Yellow Cards: 0</p>
//           <p>Fouls: 10</p>
//         </div>
//       </div>
//       <p>Note: All the shown data are from Fantasy Premier League</p>
//     </div>
//   );
// };

// export default Haaland;

import React from "react";
import "./PlayerBg.css";

const Haaland = () => {
  return (
    <div className="haaland-container">
      <div className="club-logo"></div>
      {/* Left Section */}
      <div className="player-left">
        {/* Player Info */}
        <div className="player-text">
          <h1>
            Erling <br /> Haaland
          </h1>
          <h2 className="jersey-num">#9</h2>
          <p className="player-role">Forward</p>
        </div>

        {/* Player Image */}
        <div className="player-img">
          <img src="/images/Players/Haaland.png" alt="Haaland" />
        </div>

        {/* Bottom Info Box */}
        <div className="player-box">
          <div>
            <p>
              <strong>Nationality</strong>
            </p>
            <p>Norway</p>
          </div>
          <div>
            <p>
              <strong>Preferred Foot</strong>
            </p>
            <p>Left</p>
          </div>
          <div>
            <p>
              <strong>Date of Birth</strong>
            </p>
            <p>21/07/2000</p>
          </div>
          <div>
            <p>
              <strong>Appearances</strong>
            </p>
            <p>108</p>
          </div>
          <div>
            <p>
              <strong>Goals</strong>
            </p>
            <p>99</p>
          </div>
          <div>
            <p>
              <strong>Assists</strong>
            </p>
            <p>17</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="player-stats">
        {/* <div className="club-logo"></div> */}

        <div className="stats-header">
          <div>
            <h3>Appearances</h3>
            <p>11</p>
          </div>
          <div>
            <h3>Goals</h3>
            <p>14</p>
          </div>
          <div>
            <h3>Assists</h3>
            <p>1</p>
          </div>
        </div>

        <div className="stats-body">
          <div>
            <h4>Attack</h4>
            <p>Goals: 14</p>
            <p>xG: 11.09</p>
            <p>xA: 0.86</p>
            <p>Shots On Target Inside Box: 15</p>
            <p>Touches in Opposition Box: 75</p>
            <p>Penalties (Scored): 1</p>
            <p>Hit Woodwork: 1</p>
          </div>

          <div>
            <h4>Physical</h4>
            <p>Minutes Played: 948</p>
            <p>Dribbles (Completed %): 10 (60%)</p>
            <p>Duels Won: 41</p>
            <p>Aerial Duels Won: 26</p>
          </div>

          <div>
            <h4>Defence</h4>
            <p>Total Tackles: 2</p>

            <h4>Discipline</h4>
            <p>Red Cards: 0</p>
            <p>Yellow Cards: 0</p>
            <p>Fouls: 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haaland;
