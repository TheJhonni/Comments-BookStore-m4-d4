import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          className="px-1 mx-1"
          style={{ width: "12rem" }}
          onClick={() => {
            this.props.changeSelected(this.props.book.asin);
          }}
          style={{
            border:
              this.props.selectedBook === this.props.book.asin
                ? "3px solid red"
                : "none",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.category}</Card.Title>
            <Card.Text>{this.props.book.title}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
