import { useStore } from "@nanostores/preact";
import { theme } from "../../stores/theme";

const Home = ({ children }) => {
  const $theme = useStore(theme);
  const carouselBg =
    $theme.color.includes("dark") || $theme.color.includes("black")
      ? "has-background-light"
      : $theme.bg + "-light";
  return (
    <div
      className={
        $theme.bg.includes("black") || $theme.bg.includes("dark")
          ? $theme.bg
          : $theme.bg + "-light"
      }
      style={{ color: $theme.text }}
    >
      {children}
    </div>
  );
};

export default Home;
