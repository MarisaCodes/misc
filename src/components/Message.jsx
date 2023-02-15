import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";
const Message = ({ header, children }) => {
  const $theme = useStore(theme);
  return (
    <div className={"message mt-4 is-radiusless " + $theme.color}>
      <div className="message-header is-radiusless is-size-5-tablet is-size-6-mobile">
        {header}
      </div>
      <div
        className={
          "message-body px-0 py-4 is-radiusless " +
          ($theme.color.includes("dark") || $theme.color.includes("black")
            ? $theme.secondaryBg
            : $theme.bg + "-light")
        }
        style={{ color: $theme.text }}
      >
        {children}
      </div>
    </div>
  );
};

export default Message;
