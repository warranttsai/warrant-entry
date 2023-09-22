// modules
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
// styled-component
import {
  ContactContainer,
  BlackBackgroundContainer,
} from "../../components/styled-component/Container";
// components
import CommentSection from "./comment-section/CommentSection";
import ContactSection from "./contact-section/ContactSection";

function ContactWithMe() {
  const navigate = useNavigate();

  return (
    <>
      <ContactContainer
        id="contact-container"
        style={{ minHeight: "70vh", marginBottom: 20 }}
      >
        <div
          id="contact-social-media"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate("https://www.linkedin.com/in/warrant-tsai-20463414b/");
            }}
          >
            💼 Linked In
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate("https://www.instagram.com/warrant_job_hunting/");
            }}
          >
            🕺 Instagram
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate(
                "https://www.facebook.com/profile.php?id=100007257571234"
              );
            }}
          >
            💁 Facebbook
          </Link>
        </div>
        <div
          id="contact-section"
          className="flex-1"
          style={{
            paddingInline: "100px",
          }}
        >
          <ContactSection />
        </div>
      </ContactContainer>
      <BlackBackgroundContainer style={{ minHeight: "70vh" }}>
        <CommentSection />
      </BlackBackgroundContainer>
    </>
  );
}

export default ContactWithMe;
