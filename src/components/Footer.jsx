import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const Footer = () => {
  const $theme = useStore(theme);

  return (
    <footer
      className={`footer pb-0 ${
        $theme.secondaryBgClass + " " + $theme.colorClass
      }`}
    >
      <div className="columns">
        <div className="content column is-5">
          <div className="container px-3">
            Misc. is short for miscellaneous. As in miscellaneous discussions
            and posts. There are short stories, haikus, and various anime
            discussions as well in addition to some posts that do not fit these
            categories.
          </div>
          {/* <div className="has-text-weight-bold my-3 mb-6 ml-4">
            Ways you can support me and sponsor my content:
          </div>
          <div>
            <div>
              <a className={"mb-5 button " + $theme.darkBtnClass} href="#">
                Checkout to my patreon
              </a>
            </div>
            <div><a className="button is-primary" href="#">Donate with paypal</a></div>
          </div> */}
          <div
            className={
              "has-text-weight-bold my-6 ml-3 " + $theme.secondaryColorClass
            }
          >
            Join my discord server:
          </div>
          <div>
            <a
              href="https://discord.gg/TtqnKWqF"
              target="_blank"
              className={"button " + $theme.darkBtnClass}
            >
              Discord server
            </a>
          </div>
        </div>
        <div className="column is-3 has-text-centered">
          <img
            src="/misc-logos__white.png"
            style="object-fit: scale-down;max-height:300px"
            alt="logo"
          />
        </div>
        <div className="content column is-4 mt-6">
          <h4
            className={
              "subtitle has-text-weight-bold is-size-4 " + $theme.colorClass
            }
          >
            Navigate
          </h4>
          <hr className="navbar-divider has-background-link is-block" />
          <div>
            <li style="list-style-type: none;">
              <a className={"mb-3 button " + $theme.orangeBtnClass} href="/">
                Home
              </a>
            </li>
            <li style="list-style-type: none;">
              <a
                className={"mb-3 button " + $theme.orangeBtnClass}
                href="/short-stories"
              >
                Short stories
              </a>
            </li>
            <li style="list-style-type: none;">
              <a
                className={"mb-3 button " + $theme.orangeBtnClass}
                href="/haiku"
              >
                Haiku
              </a>
            </li>
            <li style="list-style-type: none;">
              <a
                className={"mb-3 button " + $theme.orangeBtnClass}
                href="/anime"
              >
                Anime
              </a>
            </li>
            <li style="list-style-type: none;">
              <a
                className={"mb-3 button " + $theme.orangeBtnClass}
                href="/misc"
              >
                misc.
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className={"has-text-centered " + $theme.secondaryColorClass}>
        Copyright &copy; {new Date().getFullYear()} 💓
      </div>
    </footer>
  );
};

export default Footer;
