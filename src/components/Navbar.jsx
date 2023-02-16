import { useStore } from "@nanostores/preact";
import { testTheme } from "../stores/testTheme";
//import { theme } from "../stores/theme";
import { themeList } from "../stores/themeList";
const Navbar = () => {
  const randomize = (max, min) => {
    const randInt = Math.floor(Math.random() * (max - min + 1) + min);
    return themeList[randInt];
  };
  //const $theme = useStore(theme);
  const $testTheme = useStore(testTheme);
  return (
    <nav
      className={"navbar " + $testTheme.bgClass + " " + $testTheme.colorClass}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <a href="/" className={"navbar-item p-0 " + $testTheme.navbarItemClass}>
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

      <div className={"navbar-menu "+$testTheme.bgClass}>
        <div className="navbar-start">
          <a href="/" className={"navbar-item " + $testTheme.navbarItemClass}>
            Home
          </a>
          <a
            href="/short-stories"
            className={"navbar-item " + $testTheme.navbarItemClass}
          >
            Short stories
          </a>
          <a
            href="/haiku"
            className={"navbar-item " + $testTheme.navbarItemClass}
          >
            Haiku
          </a>
          <a
            href="/anime"
            className={"navbar-item " + $testTheme.navbarItemClass}
          >
            Anime
          </a>
        </div>
        <div className="navbar-end">
          <a
            href="/misc"
            className={"navbar-item " + $testTheme.navbarItemClass}
          >
            misc.
          </a>
          <div className="navbar-item">
            <a
              href="#"
              className={
                "button is-aligned-self-center " + $testTheme.darkBtnClass
              }
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
