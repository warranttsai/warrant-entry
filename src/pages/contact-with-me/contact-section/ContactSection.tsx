// modules
import { useState, useEffect, FormEvent } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// utils
// import { sendingEmailToUser } from "../../../utils/contactSectionUtils";
// styled-components
import { BlackCenterTitle } from "../../../components/styled-component/Title";
// components
import WarningBalloon from "../../../components/warning-balloon/WarningBalloon";

export default function ContactSection() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userContactNumber, setUserContactNumber] = useState<string>("");
  const [userFeedback, setUserFeedback] = useState<string>("");
  // loading state
  const [onShowBallon, setOnShowBallon] = useState<boolean>(false);
  const [ballonMessage, setBallonMessage] = useState<string>("404 Not Found!");
  const [ballonColour, setBacllonColour] = useState<string>("red");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target);
    setBallonMessage("It's not functioning yet🙇");
    setBacllonColour("red");
    setOnShowBallon(true);
    // e.preventDefault();
    // sendingEmailToUser(userEmail, userName, userContactNumber, userFeedback)
    //   .then((res: string) => {
    //     setBallonMessage(res);
    //     setBacllonColour("green");
    //     setOnShowBallon(true);
    //   })
    //   .catch((err: string) => {
    //     setBallonMessage(err.toString());
    //     setBacllonColour("red");
    //     setOnShowBallon(true);
    //   });
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
            if (typeof e.target.value === "number")
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

      {onShowBallon && (
        <WarningBalloon message={ballonMessage} colour={ballonColour} />
      )}
    </form>
  );
}
