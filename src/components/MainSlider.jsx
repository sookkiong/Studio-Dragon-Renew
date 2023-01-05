import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainSliderItem } from "./Main";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {MainSliderItem.map((slide) => {
          return (
            <div>
              <img src={slide.img} alt="슬라이드 이미지" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default MainSlider;
