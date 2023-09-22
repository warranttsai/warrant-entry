// styled-component
import {
  ContactContainer,
  BlackBackgroundContainer,
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
      <BlackBackgroundContainer
        id="comment-section-container"
        style={{ minHeight: "70vh" }}
      >
        <CommentSection />
      </BlackBackgroundContainer>
    </>
  );
}

export default ContactWithMe;
