import './Courseitem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Courseitem({Title , cimg , Textinf}) {
    return(
        <>
        <Card>
            <Card.Img variant="top" src={cimg} />
            <Card.Body>
                <Card.Title style={{fontFamily : 'lale'}}>{Title}</Card.Title>
                <Card.Text style={{fontFamily : 'yekan'}}>
                        {Textinf}
                </Card.Text>
                <Button variant="primary" style={{fontFamily: 'lale'}}>مشاهده بیشتر</Button>
            </Card.Body>
        </Card>
    </>
    )
}
export default Courseitem