import {
  FlexColumnCenteredContainer,
  Flex1,
} from "../styled-component/Container";

export default function CafeManagemengSystem() {
  return (
    <>
      <FlexColumnCenteredContainer>
        <Flex1>
          <h3>Cafe Management System (C#, .Net)</h3>
        </Flex1>
        <Flex1>
          GitHub:{" "}
          <a href="https://github.com/warranttsai/CafeManagementSystem">
            Click Me
          </a>
        </Flex1>
        <Flex1>
          Status:
          <span style={{ color: "#F6BE00" }}>Under developing</span>
        </Flex1>
        <Flex1>Created Date: 06/10/2023</Flex1>
      </FlexColumnCenteredContainer>
    </>
  );
}
