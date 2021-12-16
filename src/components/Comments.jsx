import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Comments extends Component {
  state = {
    Comments: {
      comment: "",
      rate: 0,
    },
  };

  handleInput = (property, value) => {
    this.setState({
      Comments: {
        ...this.state.Comments,
        [property]: value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          body: JSON.stringify(this.state.Comments),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2Mzk2NjE4NzYsImV4cCI6MTY0MDg3MTQ3Nn0.cTbI09BbJ6cZrlPjXkDnCLpr941GJOmT4ZT-u_mWPFs",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Comment added succesfully");
        this.setState({
          Comments: {
            comment: "",
            rate: 0,
          },
        });
      } else {
        alert("Problems in Paradise!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="my-3">
        <h2>Comments</h2>
        <Form key={Comment.comment._id} onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert your comment"
              required
              value={this.state.Comments.comment}
              onChange={(e) => {
                this.handleInput("comment", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rate this Book</Form.Label>
            <Form.Control
              as="select"
              value={this.state.Comments.rate}
              required
              onChange={(e) => {
                this.handleInput("rate", e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Comments;
