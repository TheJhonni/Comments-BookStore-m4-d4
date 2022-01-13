import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <Card className="card px-1 mx-3" style={{ width: "12rem" }}>
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            setSelectedBook(book.asin);
          }}
          style={{
            border:
              !selectedBook === book.asin
                ? "3px solid rgb(86, 187, 153)"
                : "none",
          }}
        />
        <Card.Body>
          <Card.Title>{book.category}</Card.Title>
          <Card.Text>{book.title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
