import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';  
import { Link } from 'react-router-dom';
import nemadetemad from './../../assets/nemad.jpg'
function Footer() {

    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>آدرس</h4>
                                        <span>سعادت آّباد </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone" />
                                    <div className="cta-text">
                                        <h4>شماره ثابت</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>ایمیل</h4>
                                        <span>INSTITUECODEPLUS@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html">ARSHIYA-MH</a>
                                    </div>
                                    <div className="footer-text">
                                        <p>طراحی شده توسط ارشیا مصلحی</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <img src={nemadetemad} alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                       
                                    </div>
                                    <ul>
                                        <li><Link to="/">صفحه اصلی</Link></li>
                                        <li><Link to="/about">درباره ما</Link></li>
                                        <li><Link to="/course">محصولات</Link></li>
                                        <li><Link to="/blog">وبلاگ</Link></li>
                                        <li><Link to="/panel">پنل</Link></li>
                                        <li><Link to="#">پیشنهادات</Link></li>
                                        <li><Link to="#">تیم اساتید</Link></li>
                                        <li><Link to="#">پشتیبانی</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>آخرین اخبار</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>برای دریافت اخرین اخبار و دوره ها ایمیل خود را وارد کنید . با ما در ارتباط باشید</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2024, All Right Reserved <a href="">ARSHIYA-MH</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/">صفحه اصلی</Link></li>
                                        <li><Link to="/course">محصولات</Link></li>
                                        <li><Link to="/about">درباره ما</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer