import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";
import { themeList } from "../stores/themeList";
const Navbar = () => {
  const randomize = (max, min) => {
    const randInt = Math.floor(Math.random() * (max - min + 1) + min);
    return themeList[randInt];
  };
  const $theme = useStore(theme);
  return (
    <nav
      className={"navbar " + $theme.color}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <a href="/" className="navbar-item p-0">
          <img
            src={
              $theme.color.includes("black")
                ? "/misc-logos__white.png"
                : "/misc-logos__black.png"
            }
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

      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/short-stories" className="navbar-item">
            Short stories
          </a>
          <a href="/haiku" className="navbar-item">
            Haiku
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a href="/anime" className="navbar-item">
                Anime
              </a>
              <a
                className="navbar-item random"
                onClick={() => theme.set(randomize(themeList.length - 1, 0))}
              >
                randomize theme
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <a href="/misc" className="navbar-item">
            misc.
          </a>
          <div className="navbar-item">
            <a
              href="#"
              className={"button is-aligned-self-center " + $theme.color}
            >
              Join the Discod server
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
