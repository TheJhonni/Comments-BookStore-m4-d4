import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comment, setComment] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const fetchComments = async () => {
    try {
      setisLoading(true);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2NDE5MTYwOTUsImV4cCI6MTY0MzEyNTY5NX0.dWX2y1hvd710vHoxwWhKDTc2DnLuz2m0esMkPjYmpZE",
          },
        }
      );

      if (response.ok) {
        let comments = await response.json();

        setComment(comments);
        setisError(false);
        setisLoading(false);
      } else {
        console.log("error");
        setisLoading(false);
        setisError(true);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
      setisError(true);
    }
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div className="rounded">
      {comment && (
        <>
          <AddComment asin={asin} />
          <CommentList commentsToShow={comment} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
