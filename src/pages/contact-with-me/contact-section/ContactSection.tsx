// modules
import { useState, useEffect, FormEvent } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// styled-components
import { BlackCenterTitle } from "../../../components/styled-component/Title";
// components
import WarningBalloon from "../../../components/warning-balloon/WarningBalloon";
import { sendingEmailToUser } from "../../../utils/contactSectionUtils";

export default function ContactSection() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userContactNumber, setUserContactNumber] = useState<string>("");
  const [userFeedback, setUserFeedback] = useState<string>("");
  // loading state
  const [onShowBallon, setOnShowBallon] = useState<boolean>(false);
  const [ballonMessage, setBallonMessage] = useState<string>("404 Not Found!");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendingEmailToUser(userEmail, userName, userContactNumber, userFeedback)
      .then(() => {
        console.log("Successfully send the email!");
        setBallonMessage(
          "Thank you for taking your time to contribute to the improvement of this website!"
        );
        setOnShowBallon(true);
      })
      .catch((err) => {
        console.log("Error happened on sending email!", err);
        setBallonMessage(`Error happened on sending email!`);
        setOnShowBallon(true);
      });
  };

  useEffect(() => {
    if (onShowBallon) {
      // After 3 seconds, hide the message again
      setTimeout(() => {
        setOnShowBallon(false);
      }, 1000);
    }
  }, [onShowBallon]);

  return (
    <form
      id="contact-form"
      className="d-flex flex-column justify-content-start align-items-start"
      style={{
        gap: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <BlackCenterTitle>Contact With Me</BlackCenterTitle>
      <FormControl fullWidth>
        <InputLabel htmlFor="contact-user-email" required>
          Email address
        </InputLabel>
        <Input
          id="contact-user-email"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="contact-user-name">Name</InputLabel>
        <Input
          id="contact-user-name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="contact-user-number">Contact Number</InputLabel>
        <Input
          id="contact-user-number"
          value={userContactNumber}
          onChange={(e) => {
            setUserContactNumber(e.target.value);
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextareaAutosize
          style={{ background: "white", color: "black" }}
          minRows={10}
          placeholder="Something you want to tell me..."
          value={userFeedback}
          onChange={(e) => {
            setUserFeedback(e.target.value);
          }}
        />
      </FormControl>
      <Button type="submit" variant="contained" style={{ marginLeft: "auto" }}>
        Submit
      </Button>

      {onShowBallon && <WarningBalloon message={ballonMessage} />}
    </form>
  );
}