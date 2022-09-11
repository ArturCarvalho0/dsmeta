import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/ArturCarvalho0">@ArturCarvalho0</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
