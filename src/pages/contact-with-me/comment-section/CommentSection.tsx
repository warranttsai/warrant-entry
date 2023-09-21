// modules
import React, { useState, useEffect } from "react";
// styled-components
import CommentComponent from "../../../components/comment-component/CommentComponent";
import { FlexColumnCenteredContainer } from "../../../components/styled-component/Container";
import { Button, TextareaAutosize } from "@mui/material";
import {
  fetchingComments,
  saveComment,
} from "../../../utils/commentSectionUtils";

export default function CommentSection() {
  const [inputUserName, setInputUserName] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");
  const [commentList, setCommentList] = useState<
    Array<{
      comment: string;
      comment_date: string;
      comment_time: string;
      id: string;
      user_name: string;
    }>
  >([]);

  const handleSubmitComment = () => {
    saveComment(inputUserName, inputComment)
      .then((res) => {
        console.log(res);
      })
      .catch((err: string) => {
        console.log("Save comment error!", err);
        alert(`Save comment error! ${err}`);
      });
    // refresh the comment list
    fetchingComments()
      .then((res) => {
        setCommentList(res);
      })
      .catch((err) => {
        console.log("Fetching Comments Error!", err);
        alert("Fetching Comments Error!");
      });
  };

  useEffect(() => {
    fetchingComments()
      .then((res) => {
        setCommentList(res);
      })
      .catch((err) => {
        console.log("Fetching Comments Error!", err);
        alert("Fetching Comments Error!");
      });
  }, []);

  return (
    <>
      <FlexColumnCenteredContainer>
        <div style={{ width: "50%" }}>
          <input
            className="w-100"
            style={{ minHeight: 25 }}
            value={inputUserName}
            placeholder="What is your name?"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmitComment();
            }}
            onChange={(e) => {
              setInputUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <TextareaAutosize
            className="w-100"
            style={{ minHeight: 50 }}
            placeholder="Say something..."
            value={inputComment}
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
          />
          <Button variant="contained" onClick={handleSubmitComment}>
            Submit
          </Button>
        </div>
        {commentList
          ? commentList.map(
              (
                comment: {
                  comment: string;
                  comment_date: string;
                  comment_time: string;
                  id: string;
                  user_name: string;
                },
                index: number
              ) => {
                return (
                  <React.Fragment key={comment.id}>
                    <CommentComponent index={index} comment={comment} />
                  </React.Fragment>
                );
              }
            )
          : null}
      </FlexColumnCenteredContainer>
    </>
  );
}
