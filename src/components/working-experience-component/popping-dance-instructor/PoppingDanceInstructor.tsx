// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// styled-components
import { Flex1 } from "../../styled-component/Container";
import { BrownCenterTitle } from "../../styled-component/Title";

export default function PoppingDanceInstructor() {
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
            Popping Dance Instructor - from July 2023
          </BrownCenterTitle>
          <span style={{ flex: 1, fontWeight: 700 }}>
            RMIT University Dacning Club "Funkdelics" · Freelance
          </span>
          <span style={{ flex: 1 }}>
            This is my second time to be the instructor for popping dance in
            this club. I delivered my knowledges and understanding of dancing to
            help the beginner dancers get used with popping dance.
          </span>
          <ul style={{ flex: 1 }}>
            <li>Teaching Popping Dance in Beginner Level</li>
            <li>Deliver the relevant knowledges</li>
          </ul>
        </CardContent>
      </Card>
    </Flex1>
  );
}
