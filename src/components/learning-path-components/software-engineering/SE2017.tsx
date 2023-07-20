// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import SE2017_1 from "../../../assets/SE2017/2017-1.jpeg";
import SE2017_2 from "../../../assets/SE2017/2017-2.jpeg";
import SE2017_3 from "../../../assets/SE2017/2017-3.jpeg";
import SE2017_4 from "../../../assets/SE2017/2017-4.jpeg";
import SE2017_5 from "../../../assets/SE2017/2017-5.jpeg";
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
            <span style={{ color: "red" }}>
              UML diagram, statistic, linear algebra...etc
            </span>
            . Also, as we know more about the programming, I had learned using{" "}
            <span style={{ color: "red" }}>Python</span> for application
            development and <span style={{ color: "red" }}>Unity</span> for
            simple game design. At the same time, we are also preparing the code
            assessment. It was very similar to the concept of LeetCode.
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
              overflowX: "scroll",
              height: 200,
              gap: 10,
              padding: 10,
              background: "white",
            }}
          >
            <img style={{ width: 200 }} src={SE2017_1} />
            <img style={{ width: 200 }} src={SE2017_2} />
            <img style={{ width: 200 }} src={SE2017_3} />
            <img style={{ width: 200 }} src={SE2017_4} />
            <img style={{ width: 200 }} src={SE2017_5} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
