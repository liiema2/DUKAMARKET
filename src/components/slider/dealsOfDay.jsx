import React from 'react'

const  data=[{
    id:1,
    name:"Epple iPad Pro 10.5-inch Cellular 64G",
    price:200,
    img:"/assets/img/product/tp-1.jpg",
    discount:10

},
{
    id:2,
    name:"samsung",
    price:200,
    img:"assets/img/product/tp-2.jpg",
    discount:10
},
{
    id:3,
    name:"samsung",
    price:200,
    img:"/assets/img/product/tp-1.jpg",
    discount:15
},
{
    id:4,
    name:"samsung",
    price:200,    
    img:"/assets/img/product/tp-1.jpg",
    discount:10

},
{
    id:5,
    name:"samsung",
    price:200,
    img:"/assets/img/product/tp-1.jpg",
    discount:5

}
];
import useCrud from "../../hook/useCRUD.js"


export default function dealsOfDay() {
    const { handleAddItem } = useCrud();
    const addItemToCart = () => {
        handleAddItem("jfhakj");
      };
   
    return (
        data.map((item,index) => (
            <div className="product__item swiper-slide w-25" key={index}>
                                    <div className="product__thumb fix">
                                        <div className="product-image w-img ">
                                            <a href="product-details.html">
                                                <img src={item.img} alt="product"/>
                                            </a>
                                        </div>
                                        <div className="product__offer">
                                        <span className="discount">-{item.discount}</span>
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
                                        <h6><a href="product-details.html">{item.name}</a></h6>
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
                                        <div className="price mb-10">
                                            <span>{item.price}</span>
                                        </div>
                                        <div className="progress mb-5">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width:"10%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress-rate">
                                            <span>Sold:312/1225</span>
                                        </div>
                                    </div>
                                    <div className="product__add-cart text-center">
                                        <button type="button" onClick={addItemToCart} className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                        Add to Cart
                                        </button>
                                    </div>
                                </div>
          ))
    )
}
