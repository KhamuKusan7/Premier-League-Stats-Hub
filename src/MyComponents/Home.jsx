import Hero from "./Hero"
import Highlights from "./Highlights";
import "./Home.css";

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <Highlights />
    </main>
  )
}

export default Home