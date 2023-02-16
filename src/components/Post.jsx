import { useStore } from "@nanostores/preact";
import { testTheme } from "../stores/testTheme";
import { theme } from "../stores/theme";

const Post = ({ children }) => {
  const $testTheme = useStore(testTheme);
  return (
    <div
      className={
        $testTheme.secondaryColorClass + " " + $testTheme.secondaryBgClass
      }
    >
      {children}
    </div>
  );
};
export default Post;
