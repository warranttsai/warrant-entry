// modules
import React from "react";
// styled-components
import CommentComponent from "../../../components/comment-component/CommentComponent";
import { FlexColumnCenteredContainer } from "../../../components/styled-component/Container";

export default function CommentSection() {
  const commentData = [
    { id: 1, content: "Hello" },
    { id: 2, content: "My name is Warrant" },
    { id: 3, content: "How are you?" },
    { id: 4, content: "Welcome to my website!" },
  ];
  return (
    <>
      <FlexColumnCenteredContainer>
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
