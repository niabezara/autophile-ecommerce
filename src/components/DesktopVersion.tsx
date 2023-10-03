import { Link } from "react-router-dom";

export default function DesktopVersion() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="">HEADPHONES</Link>
          </li>
          <li>
            <Link to="">SPEAKERS</Link>
          </li>
          <li>
            <Link to="">EARPHONES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
