// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";

export default function LearningPath() {
  const softwareEngineer = [{ id: 1, content: "test" }];
  return (
    <>
      <div data-testid="software-engineering" style={{ minHeight: "40vh" }}>
        <BlackCenterTitle>
          👨‍💻 Software Engineering/Computer Science
        </BlackCenterTitle>
        <div
          style={{ display: "flex", flexDirection: "row", overflow: "auto" }}
        >
          {softwareEngineer.map((item: { id: number; content: string }) => {
            return (
              <Card key={item.id} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <div
        data-testid="street-dancing"
        style={{ background: "#D3D3D3", minHeight: "40vh" }}
      >
        <BlackCenterTitle style={{ marginTop: "100px", paddingTop: "30px" }}>
          🕺 Street Dancing
        </BlackCenterTitle>
      </div>
    </>
  );
}
