import { useStore } from "@nanostores/preact";
import { testTheme } from "../../stores/testTheme";
//import { theme } from "../../stores/theme";

const Home = ({ children }) => {
  //const $theme = useStore(theme);
  const $testTheme = useStore(testTheme);
  // const carouselBg =
  //   $theme.color.includes("dark") || $theme.color.includes("black")
  //     ? $theme.secondaryBg
  //     : "has-background-white";
  return (
    <div className={$testTheme.bgClass + " " + $testTheme.colorClass}>
      {children}
    </div>
  );
};

export default Home;
