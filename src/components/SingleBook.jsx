import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card style={{ width: "12rem" }}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({ selected: !this.state.selected });
              this.setState({
                comments: !this.state.comments.length !== 0,
              });
            }}
            style={{
              border: this.state.selected ? "3px solid red" : "none",
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.category}</Card.Title>
            <Card.Text>{this.props.book.title}</Card.Text>
          </Card.Body>
          {this.state.selected && <CommentArea asin={this.props.book.asin} />}
        </Card>
      </>
    );
  }
}

export default SingleBook;
