import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const Banner = () => {
  const $theme = useStore(theme);
  return (
    <div className={"banner " + $theme.bgClass}>
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
