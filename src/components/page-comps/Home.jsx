import { useStore } from "@nanostores/preact";
import { theme } from "../../stores/theme";

const Home = ({ children }) => {
  const $theme = useStore(theme);
  const carouselBg =
    $theme.color.includes("dark") || $theme.color.includes("black")
      ? $theme.secondaryBg
      : "has-background-white";
  return (
    <div className={carouselBg} style={{ color: $theme.text }}>
      {children}
    </div>
  );
};

export default Home;
