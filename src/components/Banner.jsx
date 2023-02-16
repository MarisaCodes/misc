import { useStore } from "@nanostores/preact";
import { testTheme } from "../stores/testTheme";
//import { theme } from "../stores/theme";

const Banner = () => {
  // const $theme = useStore(theme);
  const $testTheme = useStore(testTheme);
  return (
    <div className={"banner " + $testTheme.bgClass}>
      <section className="section py-0">
        <div>
          <figure className="is-3by1 image">
            <img
              src="/misc-logos__white.png"
              style={{ objectFit: "scale-down" }}
              alt="misc website logo"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Banner;
