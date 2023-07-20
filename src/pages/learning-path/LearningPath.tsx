// styled-components
import { SE2016 } from "../../components/learning-path-components/SE2016";
import { BlackCenterTitle } from "../../components/styled-component/Title";

export default function LearningPath() {
  return (
    <>
      <div data-testid="software-engineering" style={{ minHeight: "40vh" }}>
        <BlackCenterTitle>
          👨‍💻 Software Engineering/Computer Science
        </BlackCenterTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
            paddingInline: 200,
          }}
        >
          <SE2016 />
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
