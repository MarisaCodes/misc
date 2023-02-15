import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const Post = ({ slug, thumbnail, children }) => {
  const $theme = useStore(theme);
  return (
    <div
      className={
        $theme.color.includes("black") || $theme.color.includes("dark")
          ? $theme.bg
          : $theme.bg + "-light"
      }
      style={{ color: $theme.text }}
    >
      <div class="section">
        <div class="container">
          <p class="is-block has-text-weight-bold is-size-3-tablet is-size-5-mobile mb-6">
            {slug}
          </p>
          {thumbnail && (
            <div className="my-6">
              <figure class="image mb-5 is-3by1">
                <img src={thumbnail} style="object-fit: scale-down;" alt="" />
              </figure>
            </div>
          )}
          <div class="content is-size-5-tablet is-size-6-mobile">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
