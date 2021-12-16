import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class CommentItems extends Component {
  state = {
    Comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          Comment.comment._id,
        {
          method: "POST",
          body: JSON.stringify(this.state.Comments),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2Mzk2NjE4NzYsImV4cCI6MTY0MDg3MTQ3Nn0.cTbI09BbJ6cZrlPjXkDnCLpr941GJOmT4ZT-u_mWPFs",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        this.setState({
          Comments: [],
          isLoading: true,
          isError: false,
        });
      } else {
        console.log("Ohps, something just went wrong");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }

    componentDidMount = async () => {
      this.fetchComments();
    };
    return (
      <>
        <h6>Comments</h6>
        this.state.isLoading && (
        <Spinner animation="border" variant="primary" />)
        {this.state.isError && (
          <Alert variant="danger">Error fetching comments!!!!!</Alert>
        )}
        <ListGroup>
          {this.state.Comments.map((c) => (
            <ListGroup.Item key={c._id}>
              {c.comment} - my rate is {c.rate}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  };
}

export default CommentItems;
