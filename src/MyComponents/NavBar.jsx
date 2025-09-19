import { Link } from "react-router-dom"

const NavBar = ({title}) => {
  return (
    <header className="NavBar">
        <ul>
          <li><Link to="/">{title}<br/>Stats Hub</Link></li>
          <li><Link to="/">Table</Link></li>
          <li><Link to="/PlayerProfile">Player Profile</Link></li>
          <li><Link to="/Fixtures">Fixture Difficulty</Link></li>
          <li><Link to="/Clubs">Clubs</Link></li>
          <li><Link to="/Hall_of_Fame">Hall of Fames</Link></li>
        </ul>

    </header>
  )
}

export default NavBar