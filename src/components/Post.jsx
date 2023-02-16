import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const Post = ({ children }) => {
  const $theme = useStore(theme);
  return (
    <div className={$theme.secondaryColorClass + " " + $theme.secondaryBgClass}>
      {children}
    </div>
  );
};
export default Post;
