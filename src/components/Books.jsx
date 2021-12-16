import { Component } from "react";
import { Row, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class Books extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search for Books"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Row>

        <Row>
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book, i) => (
              <SingleBook oneBook={book} key={i} />
            ))}
        </Row>
      </>
    );
  }
}

export default Books;
