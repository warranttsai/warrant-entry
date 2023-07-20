// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import NationalFormosaUniversity from "../../../assets/national-formosa-university.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export function SE2016() {
  return (
    <>
      <Card
        sx={{
          width: 300,
          background: "#FFFDD0",
          border: "5px solid rgba(3, 102, 214, 0.3)",
        }}
      >
        <CardContent>
          <BrownCenterTitle style={{ minWidth: "300px" }}>
            2016
          </BrownCenterTitle>
          <Typography
            sx={{
              fontSize: 14,
              width: "80%",
              marginInline: "auto",
            }}
            color="text.primary"
            gutterBottom
          >
            I had enrolled to the{" "}
            <span style={{ color: "blue" }}>
              Bachlor of Computer Science and Information Engineering
            </span>{" "}
            at National Formosa University in Taiwan. In the first year, I
            learned how to coding with{" "}
            <span style={{ color: "blue" }}>C/C++</span> and{" "}
            <span style={{ color: "blue" }}>
              Object Orientation Programming
            </span>
            .
          </Typography>
          <img style={{ width: 200 }} src={NationalFormosaUniversity} />
        </CardContent>
      </Card>
    </>
  );
}
