import Slider from "react-slick";
import "../../slick/onair-slick-theme.css";
import { Works } from "../Contents";
import styled from "styled-components";

const OnairSlider = () => {
  const items = Works.filter((element) => element.onAir === "방영 중");
  console.log(items);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: false,
  };
  return (
    <div
      style={{
        width: "65%",
        height: "50%",
        marginTop: "50px",
      }}
    >
      <Slider {...settings}>
        {items.map((work) => {
          return (
            <Item key={work.id} bg={work.id}>
              <div>{work.title}</div>
              <div>{work.info}</div>
              <div>{work.actors}</div>
              <div>{work.producer}</div>
            </Item>
          );
        })}
      </Slider>
    </div>
  );
};

export default OnairSlider;

const Item = styled.div`
  width: 300px;
  height: 500px;
  background: url("/img/wc${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
`;
