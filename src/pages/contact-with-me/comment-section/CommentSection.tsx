// modules
import React, { useState, useEffect } from "react";
// styled-components
import CommentComponent from "../../../components/comment-component/CommentComponent";
import { FlexColumnCenteredContainer } from "../../../components/styled-component/Container";
import { Button, TextareaAutosize } from "@mui/material";
import { fetchingComments } from "../../../utils/commentSectionUtils";

export default function CommentSection() {
  const [inputName, setInputName] = useState<string>("");
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
          <input
            className="w-100"
            style={{ minHeight: 50, marginBottom: 10 }}
            placeholder="Tell me who you are!"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          <TextareaAutosize
            className="w-100"
            style={{ minHeight: 50 }}
            placeholder="Say something..."
            value={inputComment}
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
          />
          <Button variant="contained">Submit</Button>
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
