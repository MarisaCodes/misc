import { useStore } from "@nanostores/preact";
import { theme } from "../../stores/theme";

const Home = ({ children }) => {
  const $theme = useStore(theme);

  return (
    <div className={$theme.bgClass + " " + $theme.colorClass}>{children}</div>
  );
};

export default Home;
