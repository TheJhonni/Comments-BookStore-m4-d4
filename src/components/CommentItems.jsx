import React, { Component } from "react";

class CommentItems extends Component {
  state = {};

  render() {
    return (
      <>
        <li>
          {this.props.comment.rate} - - {this.props.comment.comment}
        </li>
      </>
    );
  }
}

export default CommentItems;
