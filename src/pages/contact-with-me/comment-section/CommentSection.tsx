// modules
import React, { useState } from "react";
// styled-components
import CommentComponent from "../../../components/comment-component/CommentComponent";
import { FlexColumnCenteredContainer } from "../../../components/styled-component/Container";
import { Button, TextareaAutosize } from "@mui/material";

export default function CommentSection() {
  const [inputName, setInputName] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");
  const commentData = [
    { id: 1, content: "Hello" },
    { id: 2, content: "My name is Warrant" },
    { id: 3, content: "How are you?" },
    { id: 4, content: "Welcome to my website!" },
  ];

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
        {commentData &&
          commentData.map(
            (comment: { id: number; content: string }, index: number) => {
              return (
                <React.Fragment key={comment.id}>
                  <CommentComponent index={index} content={comment.content} />
                </React.Fragment>
              );
            }
          )}
      </FlexColumnCenteredContainer>
    </>
  );
}
