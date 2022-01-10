import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2NDE4MjcxNjEsImV4cCI6MTY0MzAzNjc2MX0.8VgXxwRxux35U5ehRsU9y1MXouealZDxFaoazJYlp1k",
        },
      }
    );
    if (response.ok) {
      alert("Comment deleted succesfully!!");
    } else {
      alert("Careful, go easy");
    }
  } catch (error) {
    console.log(error);
    alert("Comment not deleted- error!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="warning"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      X
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
