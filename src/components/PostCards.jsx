import { useStore } from "@nanostores/preact";
import "../css/indexPages.css";
import { theme } from "../stores/theme";
const PostCards = ({
  children,
  title,
  href,
  thumbnail = null,
  date,
  keywords,
}) => {
  const $theme = useStore(theme);
  let keywordsArr = keywords.split(" ");
  keywordsArr = keywordsArr.map((word) => word.split("-").join(" "));
  return (
    <div
      className={
        "card mt-6 " + $theme.secondaryBgClass + " " + $theme.colorClass
      }
    >
      <div className="card-header is-align-items-center is-flex-wrap-wrap">
        <p
          className={
            "card-header-title is-size-4-tablet is-size-5-mobile has-text-weight-bold " +
            $theme.colorClass
          }
        >
          {title}
        </p>
        {keywordsArr.map((word) => {
          return <span className="m-1 tag is-small is-info">{word}</span>;
        })}
        <time
          class="is-inline-block m-1 p-1"
          style={{
            borderRadius: "5px",
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "x-small",
          }}
          datetime={date}
        >
          {new Date(date).toDateString()}
        </time>
      </div>
      {thumbnail && (
        <div class="mt-5">
          <figure class="image is-3by1">
            <img
              src={thumbnail}
              alt="tsukihi phoenix"
              style={{ objectFit: "scale-down" }}
            />
          </figure>
        </div>
      )}
      <div className="card-content">
        <div
          className={
            "content is-size-5-tablet is-size-6-mobile custom " +
            $theme.secondaryColorClass
          }
        >
          <div className="container">{children}</div>
        </div>
      </div>
      <footer>
        <a
          href={href}
          className={
            "card-footer-item button is-radiusless " + $theme.darkBtnClass
          }
        >
          Read more...
        </a>
      </footer>
    </div>
  );
};

export default PostCards;
