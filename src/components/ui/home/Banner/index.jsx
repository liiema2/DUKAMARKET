import React from "react";
import bannerLogo1 from "../../../../assets/img/slider/01-slide-1.jpg";
import bannerLogo2 from "../../../../assets/img/slider/01-slide-2.jpg";
import bannerLogo3 from "../../../../assets/img/slider/01-slide-3.jpg";
import Slider from 'react-slick';

// Import CSS của slick-carousel (cần phải import theo cách này)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slidersData = [
  {
    id:1,
    backgroundImage: `url(${bannerLogo1})`,
    title: "SALE 30% OFF FUTURE FOOTBALL BOOTS",
    text: "Discount 30% On Products & Free Shipping",
    buttonLink: "shop",
    buttonText: "Discover now 1",
  },
  {
    id:2,
    backgroundImage: `url(${bannerLogo2})`,
    title: "SALE 30% OFF FUTURE FOOTBALL BOOTS",
    text: "Discount 30% On Products & Free Shipping",
    buttonLink: "shop",
    buttonText: "Discover now 2",
  },
  {
    id:3,
    backgroundImage: `url(${bannerLogo3})`,
    title: "SALE 30% OFF FUTURE FOOTBALL BOOTS",
    text: "Discount 30% On Products & Free Shipping",
    buttonLink: "shop",
    buttonText: "Discover now 3",
    
  },
];
const settings = {
    dots: true,
    infinite: true,
    speed: 5000, // Thời gian chuyển slide sau mỗi 3 giây
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Sử dụng autoplay thay vì autoplaySpeed
    autoplaySpeed: 3000, // Thời gian chuyển slide trong autoplay (tùy chọn)
    cssEase: 'linear',
 // Chuyển slide mà không có hiệu ứng
  };


export default function Banner() {
 
  const sliderStyle = {
    // height: '500px',
    backgroundImage:`url(${bannerLogo2})`,
    // width: '100%',
    // margin:'0px' // Điều chỉnh chiều cao của slider ở đây
  };
  const containerStyle = {
    width: '1920px', // Điều chỉnh chiều dài container ở đây
  };
  return (
    <div>
      <div className="slider-area">
        <div className="swiper-container slider__active">
          <div className="slider-wrapper swiper-wrapper">
        
          <div   style={containerStyle}>
          <Slider {...settings} >
         
         
            {slidersData.map((slider, index) => (    
          <div key={index} style={sliderStyle}>

              <div
                key={index}
                className="single-slider swiper-slide slider-height d-flex align-items-center"
                style={{ backgroundImage: slider.backgroundImage }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="slider-content">
                        <div
                          className="slider-top-btn"
                          data-animation="fadeInLeft"
                          data-delay="1.5s"
                        >
                          <a
                            href={slider.buttonLink}
                            className="st-btn b-radius " 
                          >
                            HOT DEALS
                          </a>
                        </div>
                        <h2
                          data-animation="fadeInLeft"
                          data-delay="1.7s"
                          className="pt-15 slider-title pb-5"
                        >
                          {slider.title}
                        </h2>
                        <p
                          className="pr-20 slider_text"
                          data-animation="fadeInLeft"
                          data-delay="1.9s"
                        >
                          {slider.text}
                        </p>
                        <div className="slider-bottom-btn mt-75">
                          <a
                            data-animation="fadeInUp"
                            data-delay="1.15s"
                            href={slider.buttonLink}
                            className="st-btn-b b-radius"
                          >
                            {slider.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            ))}
    
              </Slider>
            <div className="main-slider-paginations"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
