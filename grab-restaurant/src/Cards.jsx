import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://food-cms.grab.com/compressed_webp/merchants/3-C2DEKAAALZAFNA/hero/1d891d43b5f44d928d105dd098af0fdd_1606716266306749407.webp"
      />
      <Card.Body>
        <Card.Title>CHANOM - วัดไตรมิตรฯ</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img
        variant="top"
        src="https://food-cms.grab.com/compressed_webp/merchants/3-C4DGL76VLENVG6/hero/4824f6b42ad8414ab8212c3aa61e40ff_1686658086062412258.webp"
      />
      <Card.Body>
        <Card.Title>GAGA (กาก้า) - MBK Center</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img
        variant="top"
        src="https://food-cms.grab.com/compressed_webp/merchants/3-C6MJRP4YE7NWVJ/hero/7c54a450bd2b4682ac5de6911529a5f2_1716873967749344093.webp"
      />
      <Card.Body>
        <Card.Title>Ochaya (โอชายะ) - ดิโอลด์สยาม</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
