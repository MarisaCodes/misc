import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";
const Navbar = () => {
  const $theme = useStore(theme);
  return (
    <nav
      className={"navbar " + $theme.bgClass + " " + $theme.colorClass}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <a href="/" className={"navbar-item p-0 " + $theme.navbarItemClass}>
          <img
            src="/misc-logos__white.png"
            alt="navbar logo"
            style={{ maxHeight: "none", height: "80px" }}
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          onClick={() =>
            document.querySelector(".navbar-menu").classList.toggle("is-active")
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className={"navbar-menu " + $theme.bgClass}>
        <div className="navbar-start">
          <a href="/" className={"navbar-item " + $theme.navbarItemClass}>
            Home
          </a>
          <a
            href="/short-stories"
            className={"navbar-item " + $theme.navbarItemClass}
          >
            Short stories
          </a>
          <a href="/haiku" className={"navbar-item " + $theme.navbarItemClass}>
            Haiku
          </a>
          <a href="/anime" className={"navbar-item " + $theme.navbarItemClass}>
            Anime
          </a>
        </div>
        <div className="navbar-end">
          <a href="/misc" className={"navbar-item " + $theme.navbarItemClass}>
            misc.
          </a>
          <div className="navbar-item">
            <a
              href="https://discord.gg/TtqnKWqF"
              target="_blank"
              className={"button is-aligned-self-center " + $theme.darkBtnClass}
            >
              Join the Discord server
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
