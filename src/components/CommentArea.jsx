import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.comments !== prevProps.comments) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      let Response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2NDE4MjcxNjEsImV4cCI6MTY0MzAzNjc2MX0.8VgXxwRxux35U5ehRsU9y1MXouealZDxFaoazJYlp1k",
          },
        }
      );
      let comments = await Response.json();
      this.setState({ comments: comments });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
