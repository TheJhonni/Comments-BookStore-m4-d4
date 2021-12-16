import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      let Response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2Mzk2NjE4NzYsImV4cCI6MTY0MDg3MTQ3Nn0.cTbI09BbJ6cZrlPjXkDnCLpr941GJOmT4ZT-u_mWPFs",
            "Content-Type": "application/json",
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
