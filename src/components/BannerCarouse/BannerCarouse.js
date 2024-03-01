import React from "react";
import "./BannerCarouse.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const BannerCarouse = ({data}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  const Next = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdArrowForwardIos
          style={{ color: "black", fontSize: 25, fontWeight: 900 }}
        />
      </div>
    );
  };
  const Prev = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdOutlineArrowBackIosNew
          style={{ color: "black", fontSize: 25, fontWeight: 900 }}
        />
      </div>
    );
  };
 
  return (
    <div className='Banner_Carousel'>
<Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
{data.map((item) => (
           <div key={item.id}>
            <img src={item.Imgsrc} alt="" className="BannerCarousel_Image" />
          </div>
        ))}
</Slider>
    </div>
  )
}

export default BannerCarouse