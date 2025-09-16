import React from "react";
import { Link } from "react-router-dom";

export default function PlayerStats() {
  const clubBg = {
    "Arsenal" : "/images/Club_bg/Arsenal_bg.png",
    "Man City": "/images/Club_bg/ManCity_bg.png",
    "Liverpool": "/images/Club_bg/Liverpool_bg.png",
    "Chelsea" : "/images/Club_bg/Chelsea_bg.png",
    "Man United" : "/images/Club_bg/ManUtd_bg.png",
    "Tottenham" : "/images/Club_bg/Spurs_bg.png",
    "Newcastle" : "/images/Club_bg/Newcastle_bg.png",
    "Crystal Palace" : "/images/Club_bg/CrystalPalace_bg.png",
    "Everton" : "/images/Club_bg/Everton_bg.png",
    "Bournemouth" : "/images/Club_bg/Bournemouth_bg.png",
    "Nottingham" : "/images/Club_bg/Nottingham_bg.png",
    "Sunderland" : "/images/Club_bg/Sunderland_bg.png",
    "Aston Villa" : "/images/Club_bg/AstonVilla_bg.png",
    "Brentford" : "/images/Club_bg/Brentford_bg.png",
    "Brighton" : "/images/Club_bg/Brighton_bg.png",
    "Fulham" : "/images/Club_bg/Fulham_bg.png",
    "West Ham" : "/images/Club_bg/WestHam_bg.png",
    "Wolves" : "/images/Club_bg/Wolves_bg.png",
    "Burnley" : "/images/Club_bg/Burnley_bg.png",
    "Leeds" : "/images/Club_bg/Leeds_bg.png"
  };

  const players = [
    { name: "Mohamed Salah", img: "/images/Players/Salah.png", club: "Liverpool", link:"Salah"},
    { name: "Viktor Gyökeres", img: "/images/Players/Gyokeres.png", club:"Arsenal"},
    { name: "Erling Haaland", img: "/images/Players/Haaland.png", club: "Man City", link:"Haaland"},
    { name: "Cole Palmer", img:"/images/Players/Palmer.png", club:"Chelsea"},
    { name: "Bruno Fernandes", img:"/images/Players/Bruno_Fernandes.png", club:"Man United"},
    { name: "Xavi Simons", img:"/images/Players/XaviSimons.png", club:"Tottenham"},
    { name: "Sandro Tonali", img:"/images/Players/Tonali.png",club:"Newcastle"},
    { name: "Jean-Philippe Mateta", img:"/images/Players/Mateta.png", club:"Crystal Palace"},
    { name: "Jack Grealish", img:"/images/Players/Grealish.png", club:"Everton"},
    { name: "Antoine Semenyo", img:"images/Players/Semenyo.png", club:"Bournemouth"},
    { name: "Granit Xhaka", img:"/images/Players/Xhaka.png", club:"Sunderland"},
    { name: "Morgan Rogers", img:"images/Players/MorganRogers.png", club:"Aston Villa"},
    { name: "Morgan Gibbs-White", img:"images/Players/GibbsWhite.png", club:"Nottingham"},
    { name: "Jordan Henderson", img:"images/Players/JordanHenderson.png", club:"Brentford"},
    { name: "Kaoru Mitoma", img:"images/Players/Mitoma.png", club:"Brighton"},
    { name: "Jarrod Bowen", img:"images/Players/Bowen.png", club:"West Ham"},
    { name: "Hwang Hee-chan", img:"images/Players/HwangHeeChan.png", club:"Wolves"},
    { name: "Alex Iwobi", img:"images/Players/Iwobi.png", club:"Fulham"},
    { name: "Kyle Walker", img:"images/Players/KyleWalker.png", club:"Burnley"},
    { name: "Lukas Nmecha", img:"images/Players/Nmecha.png", club:"Leeds"}
  ];

  return (
    <main className="PlayerStats hide-scrollbar-container">
      <h2 className="PlayerStats-heading">Player Stats</h2>

      <ul className="player-grid">
        {players.map((p) => (
          <li
            key={p.name}
            className="player-card"
            style={{ "--bg": `url(${clubBg[p.club]})`}}
          >
            <Link to={`/${p.link}`} className="card-link" aria-label={p.name}>
              <img src={p.img} alt={p.name} className="player-img" />
              <span className="player-name">{p.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
