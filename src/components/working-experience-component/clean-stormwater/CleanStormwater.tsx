// images
import CleanStormwaterGroup1 from "../../../assets/present-work/cleanstormwater-group-1.jpeg";
import CleanStormwaterGroup2 from "../../../assets/present-work/cleanstormwater-group-2.jpeg";
import CleanStormwaterGroup3 from "../../../assets/present-work/cleanstormwater-group-3.jpeg";
import CleanStormwaterGroup4 from "../../../assets/present-work/cleanstormwater-group-4.jpeg";
// styled-components
import { Flex1 } from "../../styled-component/Container";
import { BlackCenterTitle } from "../../styled-component/Title";
import { SimpleGallery } from "../../styled-component/Gallery";

export default function Cleanstormwater() {
  return (
    <Flex1
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px black solid",
      }}
    >
      <BlackCenterTitle
        style={{ fontSize: "30px", flex: 1, marginBlock: "10px" }}
      >
        Clean Stormwater
      </BlackCenterTitle>
      <span
        style={{
          fontWeight: "700",
          fontSize: "14px",
          flex: 1,
          marginBottom: "10px",
        }}
      >
        Started from May 2022
      </span>
      <span style={{ fontWeight: "1200", fontSize: "20px", flex: 1 }}>
        Bullet Points
      </span>
      <div
        style={{
          overflowY: "scroll",
          maxHeight: "200px",
          marginBottom: "10px",
          flex: 1,
        }}
      >
        <ul style={{ textAlign: "left" }}>
          <li>Front-end development and management. (React JS/TS, ES6)</li>
          <li>
            Back-end development and management. (Sails.JS, Python Flask, AWS
            Lambda serverless)
          </li>
          <li>
            AWS: Amplify, EC2, Cognito, Lambda, Route 53, API Gateway,
            CloudWatch, S3
          </li>
          <li>Database relationship design</li>
          <li>UML chart drawing</li>
          <li>Bitbucket, JIRA Board management.</li>
          <li>Handling Google Analytics to collect user usages.</li>
          <li>Task distributing for Development Team.</li>
          <li>Trainer of new staff</li>
          <li>
            Setting up the MS Teams including user role, channel management,
            chat management and documentations.
          </li>
          <li>Refactoring: encapsulation and optimise the script</li>
          <li>Project progress presenting, reporting and monitoring.</li>
        </ul>
      </div>
      <SimpleGallery
        style={{
          maxWidth: "300px",
          marginBottom: "0.67rem",
          flex: 1,
        }}
      >
        <img style={{ width: "200px" }} src={CleanStormwaterGroup1} />
        <img style={{ width: "200px" }} src={CleanStormwaterGroup2} />
        <img style={{ width: "200px" }} src={CleanStormwaterGroup3} />
        <img style={{ width: "200px" }} src={CleanStormwaterGroup4} />
      </SimpleGallery>
    </Flex1>
  );
}
