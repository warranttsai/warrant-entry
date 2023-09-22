// modules
import { useState, useEffect, FormEvent } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// styled-components
import { BlackCenterTitle } from "../../../components/styled-component/Title";
// components
import WarningBalloon from "../../../components/warning-balloon/WarningBalloon";

export default function ContactSection() {
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
      <Button type="submit" variant="contained" style={{ marginLeft: "auto" }}>
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
  );
}
