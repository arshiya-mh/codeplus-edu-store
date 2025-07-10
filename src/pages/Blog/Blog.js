import './Blog.css'
import { Row, Col } from 'react-bootstrap'
import Nav from '../../components/Navbar/Nav'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
function Blog() {
    return (
        <>
            <Nav />
            <h2 className='articleh2'> وبلاگ </h2>
            <Row>
                <Col>
                    <div className='blogbt'>
                        <ul>
                            <li><Link to={'js'}><button className='jsbt'> JS </button></Link></li>
                            <li><Link to={'react'}><button className='reactbt'> REACT </button></Link></li>
                            <li><Link to={'python'}><button className='pybt'> PYTHON </button></Link></li>
                            <li><Link to={'crypto'}><button className='cryptbt'> CRYPTO </button></Link></li>
                            <li><Link to={'php'}><button className='phpbt'> PHP </button></Link></li>
                            <li><Link to={'cplus'}><button className='cbt'> ++C </button></Link></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Col>
                <div className="blogbody">
                    <Outlet />
                </div>
            </Col>
            <Footer />
        </>
    )
}
export default Blog