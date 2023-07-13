// modules
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { ContactContainer } from "../../components/styled-component/Container";

function ContactWithMe() {
  const navigate = useNavigate();

  return (
    <ContactContainer>
      <div
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
            navigate("https://www.facebook.com/profile.php?id=100007257571234");
          }}
        >
          💁 Facebbook
        </Link>
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        123
      </div>
    </ContactContainer>
  );
}

export default ContactWithMe;
