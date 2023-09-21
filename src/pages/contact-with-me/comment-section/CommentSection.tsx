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
  // loading
  const [loadingComments, setLoadingComments] = useState<boolean>(false);
  const [submitingNewComment, setSubmitingNewComment] =
    useState<boolean>(false);

  const handleSubmitComment = () => {
    setSubmitingNewComment(true);
    saveComment(inputUserName, inputComment)
      .then(() => {
        setInputUserName("");
        setInputComment("");
        console.log("Saving comment success!");
      })
      .catch((err: string) => {
        console.log("Save comment error!", err);
        alert(`Save comment error! ${err}`);
        setSubmitingNewComment(false);
      });
    // refresh the comment list
    setLoadingComments(true);
    fetchingComments()
      .then((res) => {
        setCommentList(res);
        setInputUserName("");
        setInputComment("");
        setSubmitingNewComment(false);
        setLoadingComments(false);
      })
      .catch((err) => {
        console.log("Fetching Comments Error!", err);
        alert("Fetching Comments Error!");
        setSubmitingNewComment(false);
        setLoadingComments(false);
      });
  };

  useEffect(() => {
    setLoadingComments(true);
    fetchingComments()
      .then((res) => {
        setCommentList(res);
        setLoadingComments(false);
      })
      .catch((err) => {
        console.log("Fetching Comments Error!", err);
        alert("Fetching Comments Error!");
        setLoadingComments(false);
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
          <Button
            variant="contained"
            onClick={handleSubmitComment}
            disabled={loadingComments || submitingNewComment}
          >
            Submit
          </Button>
        </div>
        <br />
        {loadingComments ? (
          <span>Loading...</span>
        ) : (
          commentList &&
          commentList.map(
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
        )}
      </FlexColumnCenteredContainer>
    </>
  );
}
