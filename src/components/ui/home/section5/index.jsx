import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
export default function index() {
  return (
    <div>


<section className="topsell__area-2 pt-15">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10">
                            <div className="section__title">
                                <h5 className="st-titile">Top Selling Products </h5>
                            </div>
                            <div className="product__nav-tab"> 
                                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="false">computer</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">samsung</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">HTC</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Nokia</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab" aria-selected="true">Cell Phones</button>
                                    </li>
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tab-content" id="flast-sell-tabContent">
                            <div className="tab-pane fade active show" id="computer" role="tabpanel" aria-labelledby="computer-tab">
                                <div className="product-bs-slider-2">
                                    <div className="product-slider-2 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$110</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    {/* <h1>1</h1> */}
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$150</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$200-$280</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-4.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$100-$180</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-5.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-10%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span><del>$270</del> $200</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-6.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$150-$270</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left"></i></div>
                                    <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right"></i></div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="samsung" role="tabpanel" aria-labelledby="samsung-tab">
                                <div className="product-bs-slider-2">
                                    <div className="product-slider-2 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$110</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div> 
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-4.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$100-$180</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-5.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-10%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span><del>$270</del> $200</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-6.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$150-$270</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$150</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$200-$280</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div>
                                    <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left"></i></div>
                                    <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right"></i></div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="htc" role="tabpanel" aria-labelledby="htc-tab">
                                <div className="product-bs-slider-2">
                                    <div className="product-slider-2 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-4.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$100-$180</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-5.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-10%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span><del>$270</del> $200</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-6.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$150-$270</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$110</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$150</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$200-$280</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
           
                                    <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left"></i></div>
                                    <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right"></i></div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nokia" role="tabpanel" aria-labelledby="nokia-tab">
                                <div className="product-bs-slider-2">
                                    <div className="product-slider-2 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$110</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$150</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$200-$280</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-4.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$100-$180</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-5.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-10%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span><del>$270</del> $200</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-6.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$150-$270</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left"></i></div>
                                    <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right"></i></div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="cell" role="tabpanel" aria-labelledby="cell-tab">
                                <div className="product-bs-slider-2">
                                    <div className="product-slider-2 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$110</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$150</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$200-$280</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-4.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$100-$180</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-5.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                    <span className="discount">-10%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span><del>$270</del> $200</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-6.jpg" alt="product"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye"></i>
                                                            <i className="fal fa-eye"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart"></i>
                                                            <i className="fal fa-heart"></i>
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group"></i>
                                                            <i className="fal fa-layer-group"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$150-$270</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left"></i></div>
                                    <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
