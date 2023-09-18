import {
  DrawImageForFrontEndDesign,
  EncapsulateYourStyleSheet,
} from "../../../components/software-engineer-note/FrontEndDesign";
import { ObjectOrientation } from "../../../components/software-engineer-note/ObjectOrientation";
import { BlackBackgroundContainer } from "../../../components/styled-component/Container";
import { WhiteCenterTitle } from "../../../components/styled-component/Title";

export default function MyCodingBible() {
  return (
    <BlackBackgroundContainer>
      <WhiteCenterTitle>Software Engineer Note</WhiteCenterTitle>
      <div style={{ paddingInline: 200 }}>
        <span>
          This section is my note for software engineer experience. Creating a
          simple documentation here as my engineering bible.
          <p style={{ color: "red" }}>
            Note: These are all from my understanding. It might be slightly
            different from general definition.{" "}
          </p>
        </span>
      </div>
      <br />
      <DrawImageForFrontEndDesign />
      <EncapsulateYourStyleSheet />
      <ObjectOrientation />
    </BlackBackgroundContainer>
  );
}
