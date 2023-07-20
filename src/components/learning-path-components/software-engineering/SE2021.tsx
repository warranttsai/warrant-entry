// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import NationalFormosaUniversity from "../../assets/national-formosa-university.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export function SE2016() {
  return (
    <>
      <Card sx={{ width: 300 }}>
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
            I had enrolled to the Computer Science and Information
            EngineeringNational at Formosa University in Taiwan. In the first
            year, I learned how to coding with C/C++ and Object Orientation
            Programming.
          </Typography>
          <img style={{ width: 200 }} src={NationalFormosaUniversity} />
        </CardContent>
      </Card>
    </>
  );
}
