import { NavLink } from "react-router-dom";
import siteLogo from "./img/logo.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="main-header">
        <ul className="site-logo">
          <li>
            <NavLink to={`/`}>
              <img src={siteLogo} alt="site logo" />
            </NavLink>
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
            <NavLink to={`/Ebook`}>E-Books</NavLink>
          </li>
          <li>
            <NavLink to={`/Ebook`}>Podcast Episodes</NavLink>
          </li>
          <li>
            <NavLink to={`/Blogs`}>Blog & News</NavLink>
          </li>
          <li>
            <NavLink to={`/Contact`}>Contact us</NavLink>
          </li>
        </ul>
      </nav>

      <nav class="mobile-header">
        <input type="checkbox" id="checkbox" />
        <ul class="mob d-flex align-items-center justify-content-between">
          <li class="mob-logo">
            <NavLink to="./index.html">
              <img src={siteLogo} alt="site logo" />
            </NavLink>
          </li>

          <li class="hamburger" id="hamburger">
            <label for="checkbox">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </label>
          </li>
        </ul>


        <ul class="mobile-inner">
          <li>
            <NavLink to={`/`}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={`/about`}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={`/store`}>
              Store
            </NavLink>
          </li>

          <li>
            <NavLink to={`/e-books`}>
              E-Books
            </NavLink>
          </li>

          <li>
            <NavLink to={`/podcast-episodes`}>
              Podcast Episodes
            </NavLink>
          </li>

          <li>
            <NavLink to={`/blog-&-news`}>
              Blog & News
            </NavLink>
          </li>

          <li>
            <NavLink to={`/contact-us`}>
              Contact Us
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
