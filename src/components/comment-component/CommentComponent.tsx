// images
import ProfilePicPlaceholder from "../../assets/profile-pic-placeholder.jpg";
// styled-components
import { FlexRowCenteredContainer } from "../styled-component/Container";
import {
  SpeechBubbleLeft,
  SpeechBubbleRight,
} from "../styled-component/SpeechBubble";

interface CommentComponentProps {
  index: number;
  comment: {
    comment: string;
    comment_date: string;
    comment_time: string;
    id: string;
    user_id: string;
  };
}
export default function CommentComponent({
  index,
  comment,
}: CommentComponentProps) {
  return (
    <>
      <FlexRowCenteredContainer style={{ gap: 30 }}>
        {index % 2 === 0 ? (
          <>
            <img className="flex-1" src={ProfilePicPlaceholder} />
            <SpeechBubbleLeft className="flex-1">
              {comment.comment}
            </SpeechBubbleLeft>
          </>
        ) : (
          <>
            <SpeechBubbleRight className="flex-1">
              {comment.comment}
            </SpeechBubbleRight>
            <img className="flex-1" src={ProfilePicPlaceholder} />
          </>
        )}
      </FlexRowCenteredContainer>
    </>
  );
}
