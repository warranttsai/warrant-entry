// module
import { useState } from "react";
// styled components
import {
  Flex1,
  FlexColumnCenteredContainer,
} from "../styled-component/Container";
import { BlackCenterTitle } from "../styled-component/Title";

export function Challenge1() {
  const [content, setContent] = useState<string>("");

  const calculateWords = (value: any) => {
    let strBuf = "";
    let counter = 0;
    const lenValue = value.length;
    for (const index in value) {
      strBuf += value[index];
      if (value[index] === " " || +index === lenValue - 1) {
        // If the letter is space or reached the end of content
        if (strBuf.match(/^[A-Za-z0-9]/g)) {
          counter += 1;
        }
        strBuf = "";
      }
    }
    return counter;
  };
  const checkEnglishOrNumber = (value: string) => {
    let strBuf = "";
    for (const item of value) {
      if (item.match(/[A-Za-z0-9]/g)) {
        strBuf += item;
      }
    }
    return strBuf;
  };

  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>Challenge #1: Text Analyzer Tool</BlackCenterTitle>
      {/* Introduction */}
      <span id="challenge1-introduction">
        It is an easy challenge in which you have to build logic for a text
        analyzer that will count the number of words, letters, paragraphs, and
        more of the text written in the textarea.
      </span>
      <div id="challenge1-anser" style={{ marginBlock: 10, width: "80%" }}>
        <textarea
          className="w-100"
          style={{ background: "white", color: "black", minHeight: 300 }}
          value={content}
          placeholder="Please type in your text here..."
          onChange={(e) => setContent(e.target.value)}
        />
        <FlexColumnCenteredContainer>
          <Flex1>
            <label>Number of words: </label>
            <span>{calculateWords(content)}</span>
          </Flex1>
          <Flex1>
            <label>Number of letters: </label>
            <span>{checkEnglishOrNumber(content).length}</span>
          </Flex1>
          <Flex1>
            <label>Number of sentences: </label>
            <span>{content ? content.split(". ").length : 0}</span>
          </Flex1>
          <Flex1>
            <label>Number of paragraphs: </label>
            <span>{content ? content.split("\n").length : 0}</span>
          </Flex1>
        </FlexColumnCenteredContainer>
      </div>
    </FlexColumnCenteredContainer>
  );
}

export function Challenge2() {
  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>
        Challenge #2: React Password Generator
      </BlackCenterTitle>

      <span>
        This challenge is suitable for beginners as well. In this challenge, you
        will develop logic for a password generator, including options for
        creating and validating a password with a specified strength, copying
        the password, and passwords with desired characters.
      </span>
    </FlexColumnCenteredContainer>
  );
}

export function Challenge3() {
  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>Challenge #3: Random Quote Generator</BlackCenterTitle>
      <span>
        Challenge yourself to build a random quote generator using ReactJS and
        showcase your front-end development skills. Flourish your creativity
        with this fun code challenge! This challenge differs slightly from Text
        Analyzer and Password Generator because you need to fetch data from
        json-server using Axios.
      </span>
    </FlexColumnCenteredContainer>
  );
}

export function Challenge4() {
  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>
        Challenge #4: CRUD Typescript Tasklist App
      </BlackCenterTitle>
      <span>
        This React Typescript Tasklist/Todo challenge requires you to perform
        CRUD operations with instructions to write clean, reusable, manageable,
        and scalable code. This challenge is different and more challenging than
        the last three challenges you have completed. If you can complete this
        ReactJS Typescript Tasklist challenge independently, you can be easily
        hired as an intern/junior React developer.
      </span>
    </FlexColumnCenteredContainer>
  );
}
