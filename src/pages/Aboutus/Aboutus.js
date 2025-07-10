import './Aboutus.css'
import Nav from '../../components/Navbar/Nav'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import img1 from './../../assets/img1adv.jpg'
import img2 from './../../assets/img2adv.jpg'
import img3 from './../../assets/img3adv.jpg'
import Footer from '../../components/Footer/Footer';
function Aboutus() {

    return (
        <>
            <Nav />
            <div className="advimg">
                <Row>
                    <Col>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <p className='firstdesc'>آموزشگاه Code + با رویکردی نوین در دنیای فناوری، محیطی حرفه‌ای و الهام‌بخش برای علاقه‌مندان به یادگیری مهارت‌های کاربردی فراهم کرده است. ما با بهره‌گیری از به‌روزترین ابزارها و روش‌های آموزشی، دوره‌هایی تخصصی در برنامه‌نویسی، شبکه‌های کامپیوتری و بازارهای مالی (کریپتو، بورس، فارکس) ارائه می‌دهیم.

                        اساتید باتجربه و پروژه‌محور ما، یادگیری را به تجربه‌ای واقعی و جذاب تبدیل می‌کنند تا هنرجویان از پایه تا پیشرفته، آمادگی ورود به بازار کار را پیدا کنند. کلاس‌ها در محیطی مدرن، با تجهیزات پیشرفته و با تاکید بر تمرین عملی برگزار می‌شوند.

                        در Code + فقط آموزش نمی‌بینید، بلکه رشد می‌کنید، تجربه می‌کنید و آینده‌ شغلی‌تان را می‌سازید. اگر به دنبال یادگیری حرفه‌ای و ورود قدرتمند به دنیای فناوری و سرمایه‌گذاری هستید، Code + انتخاب هوشمندانه شماست.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="lastp">
                        <div className='accor'>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header style={{ fontFamily: 'lale' }}>آیا برای شرکت در دوره‌های برنامه‌نویسی Code + نیاز به پیش‌زمینه یا تجربه قبلی دارم؟</Accordion.Header>
                                    <Accordion.Body style={{ fontFamily: 'yekan' }}>
                                        خیر. تمامی دوره‌های برنامه‌نویسی Code + از سطح مقدماتی تا پیشرفته طراحی شده‌اند. اگر هیچ پیش‌زمینه‌ای ندارید، با دوره‌های پایه شروع می‌کنید و قدم به قدم مهارت‌های مورد نیاز را یاد می‌گیرید تا به سطح حرفه‌ای برسید.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" style={{ fontFamily: 'lale' }}>
                                    <Accordion.Header >بعد از گذراندن دوره‌ها، امکان ورود به بازار کار وجود دارد؟</Accordion.Header>
                                    <Accordion.Body style={{ fontFamily: 'yekan' }}>
                                        بله. هدف اصلی Code + آموزش مهارت‌هایی است که مستقیماً در بازار کار کاربرد دارند. علاوه بر آموزش تئوری و عملی، رزومه‌سازی، پروژه‌های واقعی، و مسیر شغلی نیز به هنرجویان معرفی می‌شود تا بتوانند با آمادگی کامل وارد بازار کار شوند.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" style={{ fontFamily: 'lale' }}>
                                    <Accordion.Header>  دوره‌های بازارهای مالی شامل چه مباحثی هستند و برای چه کسانی مناسب‌اند؟</Accordion.Header>
                                    <Accordion.Body style={{ fontFamily: 'yekan' }}>
                                        دوره‌های بازارهای مالی در Code + شامل تحلیل تکنیکال، مدیریت ریسک، شناخت بازارهای کریپتو، فارکس و بورس، و همچنین آموزش استراتژی‌های معامله‌گری هستند. این دوره‌ها برای افراد مبتدی تا کسانی که تجربه اولیه دارند طراحی شده‌اند و تمرکز آن‌ها روی کسب درآمد و مدیریت سرمایه هوشمندانه است.

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='social'>

                            <ul>
                                <li><a href=""><i class="bi bi-instagram"></i></a></li>
                                <li><a href=""><i class="bi bi-linkedin"></i></a></li>
                                <li><a href=""><i class="bi bi-telegram"></i></a></li>
                                <li><a href=""><i class="bi bi-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Footer />
        </>
    )
}
export default Aboutus