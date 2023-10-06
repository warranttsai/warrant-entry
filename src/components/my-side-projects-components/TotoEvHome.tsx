// modules
import Carousel from "react-material-ui-carousel";
// images
import dashboard from "../../assets/totoEvHome/dashboard.jpg";
import tutorial from "../../assets/totoEvHome/tutorial.jpg";
import help from "../../assets/totoEvHome/help.jpg";
// styled components
import {
  FlexRowCenteredContainer,
  FlexColumnCenteredContainer,
  Flex1,
} from "../styled-component/Container";

export default function TotoEvHome() {
  return (
    <>
      <FlexRowCenteredContainer>
        <Flex1>
          <FlexColumnCenteredContainer>
            <Flex1>
              <h2>TotoEV Home</h2>
            </Flex1>
            <Flex1>
              Programming Language: <span>React TypeScript</span>
            </Flex1>

            <Flex1>
              Deploy Link: <a href="https://stormupdated.com.au/">Click Me</a>
            </Flex1>
            <Flex1>Created Date: 31/05/2023</Flex1>
          </FlexColumnCenteredContainer>
        </Flex1>
        <Flex1 style={{ minWidth: 450, maxHeight: "100%" }}>
          <Carousel>
            <img src={dashboard} />
            <img src={tutorial} />
            <img src={help} />
          </Carousel>
        </Flex1>
      </FlexRowCenteredContainer>
    </>
  );
}
