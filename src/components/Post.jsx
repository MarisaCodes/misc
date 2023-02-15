import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const Post = ({ children }) => {
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
      {children}
    </div>
  );
};
export default Post;
