// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// images
import CleanStormwaterGroup1 from "../../../assets/present-work/cleanstormwater-group-1.jpeg";
import CleanStormwaterGroup2 from "../../../assets/present-work/cleanstormwater-group-2.jpeg";
import CleanStormwaterGroup3 from "../../../assets/present-work/cleanstormwater-group-3.jpeg";
import CleanStormwaterGroup4 from "../../../assets/present-work/cleanstormwater-group-4.jpeg";
// styled-components
import { Flex1 } from "../../styled-component/Container";
import { BrownCenterTitle } from "../../styled-component/Title";

export default function Cleanstormwater() {
  return (
    <Flex1
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <Card
        sx={{
          background: "white",
          border: "5px solid rgba(3, 102, 214, 0.3)",
          width: 800,
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BrownCenterTitle
            style={{
              fontSize: "30px",
              flex: 1,
              marginBlock: "10px",
              textAlign: "left",
            }}
          >
            Clean Stormwater - from May 2022
          </BrownCenterTitle>
          <span style={{ fontWeight: "1200", fontSize: "20px", flex: 1 }}>
            Bullet Points
          </span>
          <ul style={{ flex: 1 }}>
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
          <Flex1
            style={{
              margin: "0 auto 0.67rem auto",
              display: "flex",
              gap: "10px",
              maxWidth: "700px",
              overflow: "scroll",
            }}
          >
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup1}
            />
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup2}
            />
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup3}
            />
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup4}
            />
          </Flex1>
        </CardContent>
      </Card>
    </Flex1>
  );
}
