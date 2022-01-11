import SingleBook from "./SingleBook";
import { Col, Row, Form, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const DisplayBooks = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

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
                      value={searchQuery}
                      placeholder="Search your book here"
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(searchQuery)
                )
                .map((book) => (
                  <Col xs={3} key={book.asin}>
                    <span
                      onClick={() => {
                        setSelectedBook(book.asin);
                      }}
                    >
                      <SingleBook book={book} selectedBook={selectedBook} />
                    </span>
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            {selectedBook && <CommentArea asin={selectedBook} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayBooks;
