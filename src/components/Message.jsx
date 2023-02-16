import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";
const Message = ({ header, children }) => {
  const $theme = useStore(theme);

  return (
    <div
      className={
        "message mt-4 is-radiusless " + $theme.bgClass + " " + $theme.colorClass
      }
    >
      <div
        className={
          "message-header is-radiusless is-size-5-tablet is-size-6-mobile " +
          $theme.secondaryBgClass
        }
      >
        {header}
      </div>
      <div
        className={
          "message-body px-0 py-4 is-radiusless " +
          $theme.colorClass +
          " " +
          $theme.bgClass
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Message;
