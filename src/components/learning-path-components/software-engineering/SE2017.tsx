// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import NationalFormosaUniversity from "../../assets/national-formosa-university.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export function SE2017() {
  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <BrownCenterTitle style={{ minWidth: "300px" }}>
            2017
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
            I started to learn the basic knowledges about UML diagram,
            statistic, linear algebra...etc. The school used the 2nd year of my
            Bachelor life to build up the important knowledges. Also, as we know
            more about the programming, I had learned using Python for
            application development and Unity for simple game design.
          </Typography>
          <img style={{ width: 200 }} src={NationalFormosaUniversity} />
        </CardContent>
      </Card>
    </>
  );
}
