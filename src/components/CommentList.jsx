import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup>
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} />
    ))}
  </ListGroup>
);

export default CommentList;
