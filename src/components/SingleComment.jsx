import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2Mzk2NjE4NzYsImV4cCI6MTY0MDg3MTQ3Nn0.cTbI09BbJ6cZrlPjXkDnCLpr941GJOmT4ZT-u_mWPFs",
          "Content-Type": "application/json",
        },
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
      onClick={() => deleteComment(comment._id)}
    ></Button>
  </ListGroup.Item>
);

export default SingleComment;
