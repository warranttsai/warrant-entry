import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-inline: 20vw;
  width: auto;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 350px;
`;

export const HeaderContainer = styled.div`
  padding: 20px;
  position: static;
  height: auto;
  flex: 1;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const FlexRowCenteredContainer = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: center;
  align-items: center;
`;
export const FlexColumnCenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Flex1 = styled.div`
  flex: 1;
`;
export const Flex2 = styled.div`
  flex: 2;
`;

export const GreyBackgroundContainer = styled.div`
  color: white;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 10px;
  min-height: 40vh;
  max-width: 800px;
  margin-inline: auto;
`;
