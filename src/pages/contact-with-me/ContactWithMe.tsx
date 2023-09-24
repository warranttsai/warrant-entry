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
    <>
      <ContactContainer
        id="contact-section-container"
        style={{ minHeight: "70vh", marginBottom: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactSection />
        </motion.div>
      </ContactContainer>
      <GreyBackgroundContainer
        id="comment-section-container"
        style={{ minHeight: "70vh" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CommentSection />
        </motion.div>
      </GreyBackgroundContainer>
    </>
  );
}

export default ContactWithMe;
