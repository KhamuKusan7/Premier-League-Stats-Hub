import React from 'react'
import { Link } from 'react-router-dom'

const Clubs = () => {
    const teamBg = {
    "Arsenal" : "/images/Team_bg/arsenalTeambg.png",
    "Man City": "/images/Team_bg/cityTeambg.png",
    "Liverpool": "/images/Team_bg/liverpoolTeambg.png",
    "Chelsea" : "/images/Team_bg/chelseaTeambg.png",
    "Man United" : "/images/Team_bg/manutdTeambg.png",
    "Tottenham" : "/images/Team_bg/spursTeambg.png",
    "Newcastle United" : "/images/Team_bg/newcTeambg.png",
    "Crystal Palace" : "/images/Team_bg/palaceTeambg.png",
    "Everton" : "/images/Team_bg/evertonTeambg.png",
    "Bournemouth" : "/images/Team_bg/afcTeambg.png",
    "Nottingham Forest" : "/images/Team_bg/nottinghamTeambg.png",
    "Sunderland" : "/images/Team_bg/sunderlandTeambg.png",
    "Aston Villa" : "/images/Team_bg/villaTeambg.png",
    "Brentford" : "/images/Team_bg/brentfordTeambg.png",
    "Brighton" : "/images/Team_bg/brightonTeambg.png",
    "Fulham" : "/images/Team_bg/fulhamTeambg.png",
    "West Ham" : "/images/Team_bg/westhamTeambg.png",
    "Wolves" : "/images/Team_bg/wolvesTeambg.png",
    "Burnley" : "/images/Team_bg/burnleyTeambg.png",
    "Leeds United" : "/images/Team_bg/LeedsTeambg.png"
  };

  const teams = [
    {name: "Arsenal",img:"/images/Clubs/Arsenal.png", club:"Arsenal", link:"Liverpool"},
    {name: "Aston Villa",img:"/images/Clubs/AstonVilla.png", club:"Aston Villa", link:""},
    {name: "Bournemouth",img:"/images/Clubs/Bournemouth.png", club:"Bournemouth",link:""},
    {name: "Brentford",img:"/images/Clubs/Brentford.png" , club:"Brentford", link:""},
    {name: "Brighton",img:"/images/Clubs/Brighton.png", club:"Brighton", link:""},
    {name: "Burnley",img:"/images/Clubs/Burnley.png" , club:"Burnley", link:""},
    {name: "Chelsea",img:"/images/Clubs/Chelsea.png", club:"Chelsea", link:""},
    {name:"Crystal Palace",img:"/images/Clubs/CrystalPalace.png", club:"Crystal Palace", link:""},
    {name: "Everton",img:"/images/Clubs/Everton.png", club:"Everton", link:""},
    {name: "Fulham",img:"/images/Clubs/Fulham.png", club:"Fulham", link:""},
    {name: "Leeds United",img:"/images/Clubs/Leeds.png", club:"Leeds United", link:""},
    {name: "Liverpool",img:"/images/Clubs/Liverpool.png", club:"Liverpool", link:"Liverpool"},
    {name: "Manchester United",img:"/images/Clubs/ManUnited.png", club:"Man United", link:""},
    {name: "Manchester City",img:"/images/Clubs/Mancity.png", club:"Man City", link:""},
    {name: "Newcastle United",img:"/images/Clubs/Newcastle.png", club:"Newcastle United", link:""},
    {name: "Nottingham Forest",img:"/images/Clubs/Nottingham.png", club:"Nottingham Forest", link:""},
    {name: "Tottenham Hotspur",img:"/images/Clubs/tottenham.png", club:"Tottenham", link:""},
    {name: "Sunderland",img:"/images/Clubs/Sunderland.png", club:"Sunderland", link:""},
    {name: "West Ham",img:"/images/Clubs/Westham.png", club:"West Ham", link:""},
    {name: "Wolves",img:"/images/Clubs/Wolves.png", club:"Wolves", link:""}
  ];

  return (
    <main className="Clubs hide-scrollbar-container">
      <h2>Clubs</h2>

      <ul className="team-grid">
        {teams.map((t) => (
          <li
            key={t.name}
            className="team-card"
            style={{"--bg": `url(${teamBg[t.club]})`}}
          >
            <Link to={t.link ? `/${t.link}`: "#"} className="team-card-link" aria-label={t.name}>
              <img src={t.img} alt={t.name} className="team-logo" />
              {/* <span className="team-name">{t.name}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Clubs