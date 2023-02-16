import { useStore } from "@nanostores/preact";
import { testTheme } from "../stores/testTheme";
//import { theme } from "../stores/theme";
const Message = ({ header, children }) => {
  //const $theme = useStore(theme);
  const $testTheme = useStore(testTheme);
  // +
  //         ($theme.color.includes("dark") || $theme.color.includes("black")
  //           ? $theme.secondaryBg
  //           : $theme.bg + "-light") style={{ color: $theme.text }}
  return (
    <div
      className={
        "message mt-4 is-radiusless " +
        $testTheme.bgClass +
        " " +
        $testTheme.colorClass
      }
    >
      <div className={"message-header is-radiusless is-size-5-tablet is-size-6-mobile "+$testTheme.secondaryBgClass}>
        {header}
      </div>
      <div
        className={
          "message-body px-0 py-4 is-radiusless " +
          $testTheme.colorClass +
          " " +
          $testTheme.bgClass
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Message;
