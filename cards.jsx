import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({src,title,desc}) {
  return (
    <>
    
    <Card style={{ width: '16rem' }}>
      <Card.Img style={{width: "100%"}} variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
    
  );
}

export default Cards;