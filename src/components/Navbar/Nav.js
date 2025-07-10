import { useState } from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom';
function Nav() {
    let [product ,setProduct] = useState(0)
    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        <h1 Name="sitename">+CODE</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><NavLink to="/">صفحه اصلی</NavLink></li>
                            <li><NavLink to="/about">درباره ما</NavLink></li>
                            <li className="dropdown"><NavLink to="/course"><span>محصولات</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                                <ul>
                                    <li><a href="#">PYTHON</a></li>
                                    <li className="dropdown"><a href="#"><span>  طراحی سایت
                                    </span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">آموزش HTML</a></li>
                                            <li><a href="#">آموزش CSS</a></li>
                                            <li><a href="#">JAVA SCRIPT</a></li>
                                            <li><a href="#">REACT</a></li>
                                            <li><a href="#">NEXT.JS</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">آموزش PHP</a></li>
                                    <li><a href="#"> #C</a></li>
                                    <li><a href="#">C++ / C</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/blog">وبلاگ</NavLink></li>
                            <li><NavLink to="/panel"> پنل</NavLink></li>
                            <li><NavLink to="/login">ورود</NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <div className="header-social-links">
                        <a href="#" class="notification">
                            <span className='icn'><i class="bi bi-basket-fill"></i></span>
                            <span class="badge">{product}</span>
                        </a>
                    </div>

                </div>
            </header>
        </>
    )
}
export default Nav