import Slider from "react-slick";
import { Works } from "../Contents";
import styled from "styled-components";
import "../../slick/onair-slick.css";
import "../../slick/onair-slick-theme.css";

const OnairSlider = () => {
  const items = Works.filter((element) => element.onAir === "방영 중");
  console.log(items);
  const settings = {
    dots: false,
    /* infinite: true, */
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    /* autoplay: true,
    autoplaySpeed: 1800, */
    pauseOnHover: false,
    variableWidth: true,
  };
  return (
    <div
      style={{
        width: "65%",
        height: "70%",
        paddingTop: "50px",
        boxSizing: "border-box",
      }}
    >
      <Slider {...settings}>
        {items.map((work) => {
          return <Item key={work.id} bg={work.id} style={{ width: "350px" }} />;
        })}
      </Slider>
    </div>
  );
};

export default OnairSlider;

const Item = styled.div`
  height: 420px;
  background: url("/img/wc${(props) => props.bg}.jpg") no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
