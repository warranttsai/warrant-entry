// styled-component
import { BlackCenterTitle } from "../../../components/styled-component/Title";
import {
  FlexColumnCenteredContainer,
  Flex1,
} from "../../../components/styled-component/Container";
import { Divider } from "@mui/material";

export default function AboutThisWebApp() {
  return (
    <FlexColumnCenteredContainer
      id="about-this-web-app-container"
      style={{ gap: 5, paddingInline: "10vw" }}
    >
      <BlackCenterTitle id="about-this-web-app-title">
        Technology Utilization
      </BlackCenterTitle>
      {/* Github Link */}
      <Flex1 className="text-left">
        <a href="https://github.com/WarrantTsai/warrant-entry" target="_blank">
          <span>Git Repository Link ➤</span>
        </a>
      </Flex1>
      {/* Technology Stack and Modules */}
      <Flex1
        id="about-this-web-app-technology-stack-and-modules"
        className="d-flex flex-row"
        style={{ width: "50%", flexWrap: "wrap" }}
      >
        <Flex1 className="text-left">
          <h2>
            <b>Technology Stack</b>
          </h2>
          <ul>
            <li>React TypeScript</li>
            <li>ES6</li>
            <li>Serverless Framework</li>
            <li>AWS API Gateway</li>
            <li>AWS CloudFormation</li>
            <li>AWS CloudWatch</li>
            <li>AWS Lambda</li>
            <li>AWS DynamoDB</li>
            <li>AWS SES</li>
          </ul>
        </Flex1>
        <Flex1 className="text-left">
          <h2>
            <b>Modules</b>
          </h2>
          <ul>
            <li>
              <a href="https://mui.com/">Material UI</a>
            </li>
            <li>
              <a href="https://styled-components.com/">styled-components</a>
            </li>
            <li>
              <a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/">
                SASS/SCSS
              </a>
            </li>
          </ul>
        </Flex1>
      </Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* Deploymment Platform */}
      <Flex1 id="about-this-web-app-deployment-platform">
        <h2>
          <b>What platform is it using for deployment?</b>
        </h2>
        <a href="https://vercel.com/dashboard" target="_blank">
          <h3>Vercel ➤</h3>
        </a>
      </Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* Contribution of The Project */}
      <Flex1 id="about-this-web-app-contribution-of-the-project">
        <h2>
          <b>Who contributed to this project?</b>
        </h2>
        <ul className="text-left">
          <li>Warrant TSAI</li>
        </ul>
      </Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* Commits */}
      {/* <Flex1>Commits? link?</Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      /> */}
      {/* File Structure Figure */}
      {/* <Flex1>
        File structure? It will be updated after I finished this website
      </Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      /> */}
    </FlexColumnCenteredContainer>
  );
}
