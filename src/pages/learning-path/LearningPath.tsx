// styled-components
import { ArrowComponent } from "../../components/learning-path-components/ArrowComponent";
import SE2016 from "../../components/learning-path-components/software-engineering/SE2016";
import SE2017 from "../../components/learning-path-components/software-engineering/SE2017";
import SE2018 from "../../components/learning-path-components/software-engineering/SE2018";
import { SE2019 } from "../../components/learning-path-components/software-engineering/SE2019";
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
          <ArrowComponent />
          <SE2017 />
          <ArrowComponent />
          <SE2018 />
          <ArrowComponent />
          <SE2019 />
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
