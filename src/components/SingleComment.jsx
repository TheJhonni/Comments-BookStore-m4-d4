import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2NDE4MjcxNjEsImV4cCI6MTY0MzAzNjc2MX0.8VgXxwRxux35U5ehRsU9y1MXouealZDxFaoazJYlp1k",
        },
        method: "DELETE",
        body: JSON.stringify(),
      }
    );
    if (response.ok) {
      alert("Comment deleted succesfully!!");
    }
  } catch (error) {
    console.log(error);
    alert("Comment not deleted- error!");
  }
};

const SingleComment = (props) => (
  <ListGroup.Item>
    {" "}
    {props.comment.comment}
    <Button
      variant="warning"
      className="ml-1"
      onClick={() => deleteComment(this.comment.asin)}
    >
      X
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
