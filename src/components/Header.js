const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a className="brand-logo" href="/">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/PavelAratin/reactPracticFortNite" target="_blank">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
