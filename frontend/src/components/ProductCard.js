import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link } from 'react-router-dom';


const ProductCard = () => {
    return (
        <div className='col-3'>
            <div className="product-card  position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="wishlist" />
                </Link>
            </div>
                <div className="product-image">
                    <img src="images/watch.jpg" alt="watch" />
                    
                </div>
                <div className="product-details">
                    <h6 className="brand">Titen</h6>
                    <h5 className="product-title">
                        Kids watch bulk 10 pack colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        $100.0
                    </p>
                </div>

                <div className="action-bar  position-absolute">
                    <div className="d-flex flex-column gap-15">
                        
                        <Link>
                        <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="addcart" />
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
