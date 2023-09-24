// module
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}

export default ContactWithMe;
