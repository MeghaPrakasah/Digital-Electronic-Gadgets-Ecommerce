import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import Login from '../pages/Login'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>
                                Free shipping Over $100 Free Returns
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline :   <a className='text-white' href='tel:+91 7356638753'>+91 7356638753</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white'>Digi World</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group ">
                                <input type="text"
                                    className='form-control py-2'
                                    placeholder='Search Product here'
                                    aria-label='Serch Product here'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-3' id='basic-addon2'>
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <p className="mb-0"><img src="/images/compare.svg" alt="compare" /></p>Compare <br /> Products</Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'><p className="mb-0">
                                        <img src="/images/wishlist.svg" alt="whishlist" /></p>Favourite <br /> Whishlist</Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='login'><p className="mb-0">
                                        <img src="/images/user.svg" alt="login" /></p>Log In <br /> My Account</Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' >
                                        <img src="/images/cart.svg" alt="" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0 className="mb-0"'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-bottom py-3'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">

                                        <button className="btn btn-secondary dropdown-toggle  bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="images/menu.svg" alt="" />
                                           <span className='me-5 d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item text-white" to="">Action</Link></li>
                                            <li><Link class="dropdown-item text-white" to="">Another action</Link></li>
                                            <li><Link class="dropdown-item text-white" to="">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/store">Our Store</NavLink>
                                        <NavLink to="/">Blogs</NavLink>
                                        <NavLink to="/">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
