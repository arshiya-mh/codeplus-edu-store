import './Course.css'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from '../../components/Navbar/Nav'
import jsimg from '../../assets/js.jpeg'
import pyimg from './../../assets/python.jpg'
import reactimg from './../../assets/react.png'
import nextimg from './../../assets/nextjs.png'
import cryptimg from './../../assets/crypto.jpg'
import networkimg from './../../assets/network.jpg'
import Ccimg from './../../assets/c++.png'
import cimg from './../../assets/c#.png'
function Course() {
    const cardData = [
        {
            title: "آموزش JavaScript",
            text: "یادگیری اصولی جاوااسکریپت از پایه تا حرفه‌ای با مثال‌های عملی.",
            image: jsimg,
        },
        {
            title: "React حرفه‌ای",
            text: "ساخت رابط کاربری مدرن با فریم‌ورک محبوب React و پروژه‌محور.",
            image: reactimg,
        },
        {
            title: "Next.js برای توسعه‌دهندگان",
            text: "ساخت اپلیکیشن‌های SSR و SEO-friendly با Next.js.",
            image: nextimg,
        },
        {
            title: "Python جامع",
            text: "آموزش پایتون با کاربرد در هوش مصنوعی، دیتا و اتوماسیون.",
            image: pyimg,
        },
    ];
    const cardData1 = [
        {
            title: "C++ پایه تا پیشرفته",
            text: "تسلط بر مفاهیم پایه‌ای برنامه‌نویسی، الگوریتم و ساختار داده با C++.",
            image: Ccimg,
        },
        {
            title: "C# کاربردی",
            text: "آموزش زبان سی‌شارپ برای توسعه نرم‌افزار، ویندوز و بازی‌سازی با Unity.",
            image: cimg,
        },
        {
            title: "شبکه و امنیت",
            text: "یادگیری مفاهیم شبکه، پیکربندی تجهیزات و اصول امنیت سایبری.",
            image: networkimg,
        },
        {
            title: "بازارهای مالی و کریپتو",
            text: "تحلیل بازارهای کریپتو، بلاک‌چین، مدیریت ریسک و استراتژی‌های ترید.",
            image: cryptimg,
        },
    ];
    let [product ,setProduct] = useState(0)
    let clickhandler = () =>{
        setProduct(product  + 1)
    }

    return (
        <>
            <Nav />
            <div className="courses">
                <h2> دوره های آموزشی </h2>
                <Row xs={1} md={2} className="g-4">
                    {cardData.map((item, idx) => (
                        <Col key={idx}>
                            <Card style={{display: 'flex', flexDirection: 'row'}}>
                                <Card.Img variant="top" src={item.image} className='cimg' />
                                <Card.Body>
                                    <Card.Title style={{fontFamily:'lale'}}>{item.title}</Card.Title>
                                    <Card.Text  style={{fontFamily:'yekan'}}> 
                                        {item.text}
                                        <button className='buybt' onChange={clickhandler}> اضافه به <i class="bi bi-bag"></i></button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row><br />
                <Row xs={1} md={2} className="g-4">
                    {cardData1.map((item, idx) => (
                        <Col key={idx}>
                            <Card style={{display: 'flex', flexDirection: 'row'}} >
                                <Card.Img  src={item.image} className='cimg' />
                                <Card.Body>
                                    <Card.Title  style={{fontFamily:'lale'}}>{item.title}</Card.Title>
                                    <Card.Text style={{fontFamily:'yekan'}}>
                                        {item.text}
                                        <button className='buybt'  onChange={clickhandler}> اضافه به <i class="bi bi-bag"></i></button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}
export default Course