import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import Comments from "./Comments";

class SingleBook extends Component {
  state = {
    selected: false,
    comments: [],
  };

  componentDidMount = async () => {
    const resp = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2Mzk2NjE4NzYsImV4cCI6MTY0MDg3MTQ3Nn0.cTbI09BbJ6cZrlPjXkDnCLpr941GJOmT4ZT-u_mWPFs",
        },
      }
    );

    const takenComments = await resp.json();
    this.setState({
      comments: takenComments,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          {
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
                {this.state.comments ? (
                  <Comments comments={this.state.comments} />
                ) : (
                  <Comments comments={""} />
                )}
              </Card.Body>
            </Card>
          }
        </Row>
      </Container>
    );
  }
}
export default SingleBook;
