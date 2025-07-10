import './Home.css'
import Nav from '../../components/Navbar/Nav'
import bimg from './../../assets/heroback.jpg'
import  js  from './../../assets/js.jpeg'
import  py  from './../../assets/python.jpg'
import crypto  from './../../assets/crypto.jpg'
import net  from './../../assets/network.jpg'
import { Col, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Courseitem from '../../components/Courses/Courseitem';


function Home() {
    let courseinfo = [
        {
            id: 1, 
            Title: 'آموزش جاوااسکیریپت ',
            cimg: js,
            Textinf: 'آموزش صفر تا صد جاوااسکیریپت پیشناز این دوره html , css'
        },
        {
            id: 2, 
            Title: 'آموزش پایتون',
            cimg: py,
            Textinf: 'آموزش صفر تا صد پایتون بدون نیاز به پیشنیاز از پایه تا پیشرفته '
        },
        {
            id: 3, 
            Title: 'آموزش جامع دنیای کیریپتو',
            cimg: crypto,
            Textinf: 'آموزش ارز دیجیتال  بدون نیاز به پیشنیاز همراه با معرفی همه ابزار ها و پیشنیاز ها'
        },
        {
            id: 4, 
            Title: 'آموزش شبکه های کامپیوتری',
            cimg: net,
            Textinf: 'آموزش امنیت شبکه های امنیتی با استفاده از کتابخانه های پایتون پیشتاز مورد نیاز پایتون مقدماتی و پیشرفته '
        }
    ]
    return (
        <>
            <Nav />
            <section id="hero" className="hero section dark-background">

                <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                    <h2>موسسه آموزشی</h2>
                    <p><span className="typed">+CODE</span></p>
                </div>
            </section>
            <h2 className=' m-5 prodcth2' style={{fontFamily: 'lale'}}> محصولات </h2>
            <Row className="g-4 px-4 my-5">
                {courseinfo.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <Courseitem {...item} />
                    </Col>
                ))}
            </Row>
            <Footer />


        </>
    )
}
export default Home