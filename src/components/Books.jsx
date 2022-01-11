import { useState } from "react";
import { Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const Books = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for Books"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>

      {books
        .filter((book) => book.title.toLowerCase().includes(searchQuery))
        .map((book, i) => (
          <SingleBook oneBook={book} key={i} />
        ))}
    </>
  );
};

export default Books;
