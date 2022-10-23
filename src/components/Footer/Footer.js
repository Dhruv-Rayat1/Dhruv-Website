import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
      <h3>Dhruv Rayat™️</h3>
      <div className="footer_links">
        <Link to="/games">Games</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/#quotes">Quotes</Link>
        <Link to="#aboutme">About</Link>
        <button type="button">Contact</button>
      </div>
      <div className="footer_spicy_links">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaTwitter />
        </a>
        <a>
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;