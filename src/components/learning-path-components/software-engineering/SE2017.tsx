// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export function SE2017() {
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
            I started to learn the basic knowledges about{" "}
            <span style={{ color: "blue" }}>
              UML diagram, statistic, linear algebra...etc
            </span>
            . The school used the 2nd year of my Bachelor life to build up the
            important knowledges. Also, as we know more about the programming, I
            had learned using <span style={{ color: "blue" }}>Python</span> for
            application development and Unity for simple game design. At the
            same time, we are also preparing the code assessment. It was very
            similar to the concept of LeetCode.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
