// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// images
// styled-components
import { Flex1 } from "../../styled-component/Container";
import { BrownCenterTitle } from "../../styled-component/Title";

export default function Fila() {
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
            FILA - from April 2022
          </BrownCenterTitle>
          <span style={{ fontWeight: "1200", fontSize: "20px", flex: 1 }}>
            Bullet Points
          </span>
          <ul style={{ flex: 1 }}>
            <li>General customer service including cashier and consulting</li>
            <li>Bilingual customer service</li>
            <li>Replenish the products</li>
          </ul>
        </CardContent>
      </Card>
    </Flex1>
  );
}
