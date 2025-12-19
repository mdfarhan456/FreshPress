import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">FreshPress</Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
