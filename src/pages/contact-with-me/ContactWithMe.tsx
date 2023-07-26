// modules
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link, FormControl, InputLabel, Input, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// styled-component
import { ContactContainer } from "../../components/styled-component/Container";
import { BlackCenterTitle } from "../../components/styled-component/Title";
// components
import WarningBalloon from "../../components/warning-balloon/WarningBalloon";

function ContactWithMe() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<string>("");
  const [clickOnSubmit, setClickOnSubmit] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClickOnSubmit(true);
  };

  useEffect(() => {
    if (clickOnSubmit) {
      // After 3 seconds, hide the message again
      setTimeout(() => {
        setClickOnSubmit(false);
      }, 1000);
    }
  }, [clickOnSubmit]);

  return (
    <ContactContainer id="contact-container">
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
            navigate("https://www.facebook.com/profile.php?id=100007257571234");
          }}
        >
          💁 Facebbook
        </Link>
      </div>
      <form
        id="contact-form"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          paddingInline: "100px",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <BlackCenterTitle>Contact With Me</BlackCenterTitle>
        <FormControl fullWidth>
          <InputLabel htmlFor="contact-email" required>
            Email address
          </InputLabel>
          <Input id="contact-email" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="contact-name">Name</InputLabel>
          <Input id="contact-name" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="contact-number">Contact Number</InputLabel>
          <Input id="contact-number" />
        </FormControl>
        <FormControl fullWidth>
          <TextareaAutosize
            style={{ background: "white", color: "black" }}
            minRows={10}
            placeholder="Something you want to tell me..."
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>

        {clickOnSubmit && (
          <WarningBalloon
            message={
              "This function is not enable yet. Thank you for your time to visit my website!"
            }
          />
        )}
      </form>
    </ContactContainer>
  );
}

export default ContactWithMe;
