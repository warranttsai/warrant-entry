// modules
import { FormControl, FormLabel } from "@mui/material";
// styled-components
import { BlackCenterTitle } from "../../../components/styled-component/Title";

export default function ContactSection() {
  return (
    <div
      className="d-flex flex-column text-left"
      style={{ paddingInline: "10vw" }}
    >
      <FormControl fullWidth>
        <BlackCenterTitle>My Contact Details</BlackCenterTitle>
        <FormLabel htmlFor="contact-email">
          Email: warrant1997@gmail.com
        </FormLabel>
        <FormLabel htmlFor="contact-mobile">Mobile: 0450601208</FormLabel>
      </FormControl>
    </div>
  );
}
