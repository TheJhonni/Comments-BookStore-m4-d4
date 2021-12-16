import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroup.Item> {props.comment.comment}</ListGroup.Item>
);

export default SingleComment;
