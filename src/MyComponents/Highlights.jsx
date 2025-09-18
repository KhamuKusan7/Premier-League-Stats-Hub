import { FaChartBar, FaUsers, FaFire, FaStar } from "react-icons/fa";

const highlights = [
  { title: "Player Stats", desc: "Goals, assists, cards & more.", icon: <FaChartBar />, link: "/players" },
  { title: "Clubs & Standings", desc: "Track team form & league table.", icon: <FaUsers />, link: "/clubs" },
  { title: "Fixture Difficulty", desc: "Plan FPL & predict results.", icon: <FaFire />, link: "/fixtures" },
  { title: "Hall of Fame", desc: "Relive legends & iconic moments.", icon: <FaStar />, link: "/hall-of-fame" },
];

export default function Highlights() {
  return (
    <section className="highlights">
      {highlights.map((h, i) => (
        <a key={i} href={h.link} className="highlight-card">
          <div className="icon">{h.icon}</div>
          <h2>{h.title}</h2>
          <p>{h.desc}</p>
        </a>
      ))}
    </section>
  );
}
