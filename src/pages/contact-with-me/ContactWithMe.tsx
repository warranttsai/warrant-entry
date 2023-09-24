// styled-component
import {
  ContactContainer,
  GreyBackgroundContainer,
} from "../../components/styled-component/Container";
// components
import CommentSection from "./comment-section/CommentSection";
import ContactSection from "./contact-section/ContactSection";

function ContactWithMe() {
  return (
    <>
      <ContactContainer
        id="contact-section-container"
        style={{ minHeight: "70vh", marginBottom: 20 }}
      >
        <ContactSection />
      </ContactContainer>
      <GreyBackgroundContainer
        id="comment-section-container"
        style={{ minHeight: "70vh" }}
      >
        <CommentSection />
      </GreyBackgroundContainer>
    </>
  );
}

export default ContactWithMe;
