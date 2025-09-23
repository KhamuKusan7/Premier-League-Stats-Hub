import React, { useEffect, useState } from "react";

export default function PLData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/pl-data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (!data) return <p className="loading">Loading data...</p>;

  return (
    <div className="pl-container">
      <header className="pl-header">
        <h1>Premier League — {data.season}</h1>
        <div className="updated">Updated: {data.updated}</div>
      </header>

      {/* Standings */}
      <section className="table-wrapper">
        <h2 className="section-title">Standings</h2>
        <table className="standings-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {data.standings.map((team) => (
              <tr key={team.position}>
                <td>{team.position}</td>
                <td className="team">{team.team}</td>
                <td>{team.played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goals_for}</td>
                <td>{team.goals_against}</td>
                <td>{team.goal_difference}</td>
                <td className="points">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Stats: Top Scorers / Assists / Clean Sheets */}
      <section className="stats-row">
        {/* Top Scorers */}
        <div className="card">
          <h2 className="section-title">Top Scorers</h2>
          <div className="table-wrapper small">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Team</th>
                  <th>Goals</th>
                </tr>
              </thead>
              <tbody>
                {data.top_scorers.map((p) => (
                  <tr
                    key={p.rank}
                    className={p.rank <= 3 ? `top-rank rank-${p.rank}` : ""}
                  >
                    <td className="rank">{p.rank}</td>
                    <td className="player">{p.player}</td>
                    <td className="team-cell">{p.team}</td>
                    <td className="goals">{p.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assists */}
        <div className="card">
          <h2 className="section-title">Top Assists</h2>
          <div className="table-wrapper small">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Team</th>
                  <th>Assists</th>
                </tr>
              </thead>
              <tbody>
                {data.assists.map((p) => (
                  <tr key={p.rank}>
                    <td className="rank">{p.rank}</td>
                    <td className="player">{p.player}</td>
                    <td className="team-cell">{p.team}</td>
                    <td className="assists">{p.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clean Sheets */}
        <div className="card">
          <h2 className="section-title">Clean Sheets</h2>
          <div className="table-wrapper small">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Team</th>
                  <th>Clean Sheets</th>
                </tr>
              </thead>
              <tbody>
                {data.clean_sheets.map((p) => (
                  <tr key={p.rank}>
                    <td className="rank">{p.rank}</td>
                    <td className="player">{p.player}</td>
                    <td className="team-cell">{p.team}</td>
                    <td className="cs">{p.clean_sheets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
