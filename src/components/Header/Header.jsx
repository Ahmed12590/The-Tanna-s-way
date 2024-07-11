import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="main-header">
        <ul className="site-logo">
          <li>
            <NavLink to={`/`}>Logo</NavLink>
          </li>
        </ul>

        <ul className="main-nav">
          <li>
            <NavLink to={`/`}>home</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`#`}>Store</NavLink>
          </li>
          <li>
            <NavLink to={`#`}>E-Books</NavLink>
          </li>
          <li>
            <NavLink to={`/Contact`}>Contact us</NavLink>
          </li>
        </ul>
      </nav>

      {/* <nav className="mob-header">
        <ul className="mob-nav">
          <li>
            <Navlink to={`#`}>Logo</Navlink>
          </li>
          <li>|||</li>
        </ul>

        <ul className="mob-inner">
          <li>
            <Navlink to={`#`}>home</Navlink>
          </li>
          <li>
            <Navlink to={`#`}>About</Navlink>
          </li>
          <li>
            <Navlink to={`#`}>Store</Navlink>
          </li>
          <li>
            <Navlink to={`#`}>E-Books</Navlink>
          </li>
          <li>
            <Navlink to={`#`}>Contact us</Navlink>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
