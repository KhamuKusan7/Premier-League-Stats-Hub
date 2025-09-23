import React, { useEffect, useState } from "react";

const Table = () => {
  const [data,setData] = useState(null);
  useEffect(() => {
    fetch("/pl-data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error Loading local JSON", err));
  }, []);

  if (!data) return <p className="loading">Loading data...</p>;
  return (
    <div className="Table container">
        <header className="pl-header">
            <h1>Premier League - {data.season}</h1>
            <div>Updated: {data.updated}</div>
        </header>

        <section className="table-wrapper">
      <table className="standings-table">
        <thead>
            <tr>
                <th>Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
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
    </div>
  );
};

export default Table;
