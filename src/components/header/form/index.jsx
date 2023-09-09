import React from 'react'

export default function index() {
  return (
    <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                        <div className="header__search">
                            <form action="#">
                                <div className="header__search-box">
                                    <input className="search-input" type="text" placeholder="I'm shopping for..."/>
                                    <button className="button" type="submit"><i className="far fa-search"></i> </button>
                                </div>
                                <div className="header__search-cat"  style={{left:"1%" }}  >
                                    <select 
                                    style={{border:"0px none" }} 
                                    
                                    >
                                        <option>All Categories</option>
                                        <option>Best Seller Products</option>
                                        <option>Top 10 Offers</option>
                                        <option>New Arrivals</option>
                                        <option>Phones &amp; Tablets</option>
                                        <option>Electronics &amp; Digital</option>
                                        <option>Fashion &amp; Clothings</option>
                                        <option>Jewelry &amp; Watches</option>
                                        <option>Health &amp; Beauty</option>
                                        <option>Sound &amp; Speakers</option>
                                        <option>TV &amp; Audio</option>
                                        <option>Computers</option>
                                    </select>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
  )
}
