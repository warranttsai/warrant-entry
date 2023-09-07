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
  content: string;
}
export default function CommentComponent({
  index,
  content,
}: CommentComponentProps) {
  return (
    <>
      <FlexRowCenteredContainer style={{ gap: 30 }}>
        {index % 2 === 0 ? (
          <>
            <img className="flex-1" src={ProfilePicPlaceholder} />
            <SpeechBubbleLeft className="flex-1">{content}</SpeechBubbleLeft>
          </>
        ) : (
          <>
            <SpeechBubbleRight className="flex-1">{content}</SpeechBubbleRight>
            <img className="flex-1" src={ProfilePicPlaceholder} />
          </>
        )}
      </FlexRowCenteredContainer>
    </>
  );
}
