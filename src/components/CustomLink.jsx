import { useStore } from "@nanostores/preact";
import { theme } from "../stores/theme";

const CustomLink = ({ href, text }) => {
  const $theme = useStore(theme);
  return (
    <a href={href} className={"my-3 button " + $theme.color}>
      {text}
    </a>
  );
};

export default CustomLink;
