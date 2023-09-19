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
  const [inputComment, setInputComment] = useState<string>("");
  const [commentList, setCommentList] = useState<
    Array<{
      comment: string;
      comment_date: string;
      comment_time: string;
      id: string;
      user_id: string;
    }>
  >([
    {
      comment: "",
      comment_date: "",
      comment_time: "",
      id: "",
      user_id: "",
    },
  ]);

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
          <span>Dear user!</span>
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
            onClick={() => {
              saveComment("-1", inputComment)
                .then((res) => {
                  console.log(res);
                })
                .catch((err: string) => {
                  console.log("Save comment error!", err);
                  alert(`Save comment error! ${err}`);
                });
            }}
          >
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
                  user_id: string;
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
