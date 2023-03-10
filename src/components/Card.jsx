import { useStore } from "@nanostores/preact";
import "../css/cards.css";
import { theme } from "../stores/theme";
const Card = ({ href, title, date, thumbnail = null, children }) => {
  const $theme = useStore(theme);
  return (
    <div
      className={
        "card card-hover " + $theme.secondaryBgClass + " " + $theme.colorClass
      }
    >
      {thumbnail && (
        <div className="card-image">
          <figure className="image is-3by2">
            <img
              src={thumbnail}
              alt="tsukihi phoenix"
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
      )}
      <div className="pt-4 px-4">
        <div
          className={
            "is-size-4-tablet custom-title is-size-5-mobile has-text-weight-bold " +
            $theme.colorClass
          }
        >
          {title}
        </div>
      </div>
      <div className="card-content">
        <div
          className={"custom-content is-size-6 " + (thumbnail ? "" : "mt-6")}
        >
          {children}
        </div>
      </div>
      <time
        class="is-inline-block m-1 p-2"
        style={{ borderRadius: "5px", fontSize: "x-small" }}
        datetime={date}
      >
        {new Date(date).toDateString()}
      </time>
      <footer>
        <a
          href={href}
          className={
            "card-footer-item button is-radiusless " + $theme.orangeBtnClass
          }
        >
          view
        </a>
      </footer>
    </div>
  );
};
export default Card;
