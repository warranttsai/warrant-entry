// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import NationalFormosaUniversity from "../../../assets/national-formosa-university.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export default function SE2016() {
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
            <span style={{ color: "red" }}>
              Bachlor of Computer Science and Information Engineering
            </span>{" "}
            at National Formosa University in Taiwan. In the first year, I
            learned how to coding with{" "}
            <span style={{ color: "red" }}>C/C++</span> and{" "}
            <span style={{ color: "red" }}>Object Orientation Programming</span>
            . <br />
            On the other hand, I had joined the labratory of Cloud Computing
            System and learning with professor{" "}
            <a
              href="https://patent.nfu.edu.tw/patent/pages/teachers.php?professorId=982"
              target="_blank"
            >
              Jian Ming Xuan
            </a>
          </Typography>
          <img style={{ width: 200 }} src={NationalFormosaUniversity} />
        </CardContent>
      </Card>
    </>
  );
}
