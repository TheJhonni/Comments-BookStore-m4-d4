import SingleBook from "./SingleBook";
import { Component } from "react";
import { Col, Row, Form, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

class DisplayBooks extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col>
                  <Form className="justify-content-center">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Search</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.searchQuery}
                        placeholder="Search your book here"
                        onChange={(e) => {
                          this.setState({ searchQuery: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                {this.props.books
                  .filter((book) =>
                    book.title.toLowerCase().includes(this.state.searchQuery)
                  )
                  .map((book) => (
                    <Col xs={3} key={book.asin}>
                      <SingleBook
                        book={book}
                        selectedBook={this.state.selectedBook}
                        changeSelected={(asin) =>
                          this.setState({
                            selectedBook: asin,
                          })
                        }
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col md={4}>
              <CommentArea asin={this.state.selectedBook} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DisplayBooks;
