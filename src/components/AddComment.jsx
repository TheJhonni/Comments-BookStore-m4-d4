import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (e) => {
  const [comment, setComment] = useState("");
  const [elementId, setElementId] = useState(null);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    setElementId(elementId);
  });

  useEffect(() => {
    const sendComment = async () => {
      try {
        let Response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments",
          {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2NDE4MjcxNjEsImV4cCI6MTY0MzAzNjc2MX0.8VgXxwRxux35U5ehRsU9y1MXouealZDxFaoazJYlp1k",
            },
          }
        );
        let newComment = await Response.json();

        setComment(newComment);
      } catch (error) {
        console.log(error);
        alert("Naaah you made a mistake! Comment not sent");
      }
    };

    sendComment();
  }, []);

  return (
    <div>
      <Form onSubmit={AddComment}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Comment Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="add your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
