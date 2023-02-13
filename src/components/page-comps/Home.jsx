import { useStore } from "@nanostores/preact";
import { theme } from "../../stores/theme";

const Home = () => {
  const $theme = useStore(theme);
  return (
    <div
      className={
        $theme.bg.includes("black") || $theme.bg.includes("dark")
          ? $theme.bg
          : $theme.bg + "-light"
      }
      style={{ color: $theme.text }}
    >
      <section className="section"></section>
    </div>
  );
};

export default Home;
