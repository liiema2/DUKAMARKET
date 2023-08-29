import React from 'react'
import   Logo  from '../../assets/img/slider/01-slide-1.jpg'


export default function Banner() {
    const Background =Logo;
    console.log(Background);
    var sectionStyle = {
      width: "100%",
      height: "400px",
      backgroundImage: `url(${Background})`
    };
  return (


    <div>
<div className="slider-area">
            <div className="swiper-container slider__active">
                <div className="slider-wrapper swiper-wrapper">
                    <div className="single-slider swiper-slide slider-height d-flex align-items-center" style={sectionStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="slider-content">
                                        <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1.5s">
                                            <a href="product-details.html" className="st-btn b-radius">HOT DEALS</a>
                                        </div>
                                        <h2 data-animation="fadeInLeft" data-delay="1.7s" className="pt-15 slider-title pb-5">SALE 30% OFF <br/> FUTURE FOOTBALL BOOTS</h2>
                                        <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.9s">Discount 30% On Products & Free Shipping</p>
                                        <div className="slider-bottom-btn mt-75">
                                            <a data-animation="fadeInUp" data-delay="1.15s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider swiper-slide slider-height d-flex align-items-center" data-background="assets/img/slider/01-slide-2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="slider-content">
                                        <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
                                            <a href="product-details.html" className="st-btn b-radius">New Arraivels</a>
                                        </div>
                                        <h2 data-animation="fadeInLeft" data-delay="1.5s" className="pt-15 slider-title pb-5">SALE 20% OFF<br/> SAMSUNG GALAXY BUDS </h2>
                                        <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.7s">Discount 30% On Products & Free Shipping</p>
                                        <div className="slider-bottom-btn mt-75">
                                            <a data-animation="fadeInUp" data-delay="1.9s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider swiper-slide slider-height d-flex align-items-center" data-background="assets/img/slider/01-slide-3.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="slider-content">
                                        <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
                                            <a href="product-details.html" className="st-btn b-radius">New DEALS</a>
                                        </div>
                                        <h2 data-animation="fadeInLeft" data-delay="1.5s" className="pt-15 slider-title pb-5">SALE 30% OFF <br/> FUTURE FOOTBALL BOOTS</h2>
                                        <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.8s">Discount 30% On Products & Free Shipping</p>
                                        <div className="slider-bottom-btn mt-75">
                                            <a data-animation="fadeInUp" data-delay="1.10s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-slider-paginations"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
