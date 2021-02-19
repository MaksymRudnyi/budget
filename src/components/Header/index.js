import { Link } from "react-router-dom";
  
import { Nav } from './styles';

const Header = () => (
    <Nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/statistics">Statistics</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </Nav>
)

export default Header;