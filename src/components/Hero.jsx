import "../css/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className="hero">
      <h1>Welcome to FreshPress</h1>
      <p>
        Stay informed with the latest news from around the world. 
        Get real-time updates on top stories, breaking news, and trending topics — all in one place!
      </p>
       <Link to="/news">
        <button>Read Latest News</button>
      </Link>
    </section>
    </>
  );
};

export default Hero;
