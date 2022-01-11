import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Card className="px-1 mx-1" style={{ width: "12rem" }}>
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            setSelectedBook(book.asin);
          }}
          style={{
            border: selectedBook === book.asin ? "3px solid red" : "none",
          }}
        />
        <Card.Body>
          <Card.Title>{book.category}</Card.Title>
          <Card.Text>{book.title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
