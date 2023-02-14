import { useRef } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { theme } from "../../stores/theme";
import "../../css/carousel.css";
const Carousel = ({ children }) => {
  const $theme = useStore(theme);
  const scrollBarStyles = `.thumbBg::-webkit-scrollbar-thumb {
  background-color: ${$theme.hex};
}`;
  const carouselRef = useRef();
  const handleClick = (id) => {
    if (id === "right") {
      carouselRef.current.scrollLeft += 1000;
    } else if (id === "left") {
      carouselRef.current.scrollLeft -= 1000;
    }
  };
  const carouselBg =
    $theme.color.includes("dark") || $theme.color.includes("black")
      ? "has-background-light"
      : $theme.bg + "-light";
  return (
    <div className="carousel-wrapper">
      <div className={"carousel thumbBg " + carouselBg} ref={carouselRef}>
        <style>{scrollBarStyles}</style>
        <button
          className={"button left p-1 is-hidden-touch " + $theme.color}
          onClick={() => handleClick("left")}
        >
          <p className="is-size-3 has-text-weight-bold">{"\u25C3"}</p>
        </button>
        {children}
        <button
          className={"button right p-1 is-hidden-touch " + $theme.color}
          onClick={() => handleClick("right")}
        >
          <p className="is-size-3 has-text-weight-bold">{"\u25B9"}</p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
