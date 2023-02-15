import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";
const Message = ({ header, children, bodyBg }) => {
  const $theme = useStore(theme);
  return (
    <div className={"message mt-4 is-radiusless " + $theme.color}>
      <div className="message-header is-radiusless is-size-4-tablet is-size-5-mobile">
        {header}
      </div>
      <div
        className={
          "message-body p-3 is-radiusless " +
          (bodyBg &&
            ($theme.color.includes("dark") || $theme.color.includes("black")
              ? $theme.bg
              : $theme.bg + "-light"))
        }
        style={{ color: $theme.text }}
      >
        {children}
      </div>
    </div>
  );
};

export default Message;
