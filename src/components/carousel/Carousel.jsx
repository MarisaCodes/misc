import { useRef } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import "../../css/carousel.css";
import { theme } from "../../stores/theme";
const Carousel = ({ children }) => {
  const $theme = useStore(theme);
  const scrollBarStyles = `.thumbBg::-webkit-scrollbar-thumb {
  background-color: ${$theme.thumbHex};
}`;
  const carouselRef = useRef();
  const handleClick = (id) => {
    if (id === "right") {
      carouselRef.current.scrollLeft += 1000;
    } else if (id === "left") {
      carouselRef.current.scrollLeft -= 1000;
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className={"carousel thumbBg"} ref={carouselRef}>
        <style>{scrollBarStyles}</style>
        <button
          className={"button left p-1 is-hidden-mobile " + $theme.darkBtnClass}
          onClick={() => handleClick("left")}
        >
          <p className="is-size-3 has-text-weight-bold">{"\u25C3"}</p>
        </button>
        {children}
        <button
          className={"button right p-1 is-hidden-mobile " + $theme.darkBtnClass}
          onClick={() => handleClick("right")}
        >
          <p className="is-size-3 has-text-weight-bold">{"\u25B9"}</p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
