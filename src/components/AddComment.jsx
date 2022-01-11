import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const sendComment = async (e) => {
    try {
      e.preventDefault();
      let Response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify({ elementId: asin, comment, rate }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2NDE5MTYwOTUsImV4cCI6MTY0MzEyNTY5NX0.dWX2y1hvd710vHoxwWhKDTc2DnLuz2m0esMkPjYmpZE",
          },
        }
      );
      console.log(Response);

      alert("You just sent: " + comment);
    } catch (error) {
      console.log(error);
      alert("Naaah you made a mistake! Comment not sent");
    }
  };

  return (
    <div className="mx-4 px-4 d-flex justify-content-center">
      <Form onSubmit={sendComment}>
        <Form.Group
          className="blue rounded"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Comment Text</Form.Label>
          <Form.Control
            type="text"
            className="rounded"
            placeholder="add your comment"
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="blue rounded"
          controlId="exampleForm.ControlSelect1"
        >
          <Form.Label>Rate the book</Form.Label>
          <Form.Control
            className="rounded"
            as="select"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button className="blue text-dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
