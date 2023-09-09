import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import useCrud from '../.../../../../../hook/useCRUD.js';

export default function index() {
  return (
 

<div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                        <div className="header-action">
                            <div className="block-userlink">
                                <a className="icon-link" >
                                {/* href="my-account.html" */}
                                <i className="">
                                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                <FontAwesomeIcon icon={faUser} size='xs' style={{color: "#fff",}} />
                          
                                </i>
                                <span className="text">
                                <span className="sub">Login </span>
                                My Account </span>
                                </a>
                            </div>
                            <div className="block-wishlist action">
                                <a className="icon-link" >
                                {/* href="wishlist.html" */}
                                <i className="">
                                <FontAwesomeIcon icon={faHeart} style={{color: "#fff",}} />
                                </i>
                                <span className="count">0</span>
                                <span className="text">
                                <span className="sub">Favorite</span>
                                My Wishlist </span>
                                </a>
                            </div>
                            <div className="block-cart action">
                                <a className="icon-link">
                                {/* href="cart.html" */}
                                <i className="">
                                <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />

                                </i>
                                <span className="count">1</span>
                                <span className="text">
                                <span className="sub">Your Cart:</span>
                                $00.00 </span>
                                </a>
                                <div className="cart">
                                    <div className="cart__mini">
                                        <ul>
                                            <li>
                                              <div className="cart__title">
                                                <h4>Your Cart</h4>
                                                <span>(1 Item in Cart)</span>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="cart__item d-flex justify-content-between align-items-center">
                                                <div className="cart__inner d-flex">
                                                  <div className="cart__thumb">
                                                    <a href="product-details.html">
                                                      <img src="assets/img/cart/20.jpg" alt=""/>
                                                    </a>
                                                  </div>
                                                  <div className="cart__details">
                                                    <h6><a href="product-details.html"> Samsung C49J89: £875, Debenhams Plus  </a></h6>
                                                    <div className="cart__price">
                                                      <span>$255.00</span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cart__del">
                                                    <a href="#"><i className="fal fa-times"></i></a>
                                                </div>
                                              </div>
                                            </li>

                                            <li>
                                              <div className="cart__sub d-flex justify-content-between align-items-center">
                                                <h6>Subtotal</h6>
                                                <span className="cart__sub-total">$255.00</span>
                                              </div>
                                            </li>
                                            <li>
                                                <a href="cart.html" className="wc-cart mb-10">View cart</a>
                                                <a href="checkout.html" className="wc-checkout">Checkout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  
  )
}
