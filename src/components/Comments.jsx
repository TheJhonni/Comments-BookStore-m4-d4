import React, { Component } from "react";
import CommentItems from "./CommentItems";
import FormControl from "react-bootstrap/FormControl";

class Comments extends Component {
  state = {
    commentFilter: "",
  };

  render() {
    return (
      <>
        <FormControl
          placeholder="write your comment"
          value={this.state.commentFilter}
          onChange={(e) =>
            this.setState({
              commentFilter: e.currentTarget.value.toLowerCase(),
            })
          }
        ></FormControl>

        <ul>
          {this.props.comment &&
            this.props.comments
              .filter(
                (comment) =>
                  comment.comment
                    .toLowerCase()
                    .indexOf(this.state.commentFilter) !== -1
              )
              .map((comment) => (
                <CommentItems
                  key={comment._id}
                  comment={comment}
                  placeholder="write your comment"
                />
              ))}
        </ul>
      </>
    );
  }
}

export default Comments;
