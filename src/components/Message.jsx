import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const Message = ({ header, children }) => {
  const $theme = useStore(theme);
  return (
    <div className={"message is-radiusless " + $theme.color}>
      <div className="message-header is-radiusless">{header}</div>
      <div className="message-body px-4">{children}</div>
    </div>
  );
};

export default Message;
