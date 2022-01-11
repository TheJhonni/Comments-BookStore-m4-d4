import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async (elementId) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + elementId,
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
  <ListGroup.Item className="d-flex justify-content-between mx-1 align-items-center">
    {comment.comment}
    <svg
      onClick={() => deleteComment(comment._id)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-trash-fill text-danger ml-3"
      viewBox="0 0 16 16"
    >
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    </svg>
  </ListGroup.Item>
);

export default SingleComment;
