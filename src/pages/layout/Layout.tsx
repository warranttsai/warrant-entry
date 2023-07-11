// modules
import { Outlet } from "react-router-dom";
import styled from "styled-components";
// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Layout() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
  `;

  const HeaderContainer = styled.div`
    background-color: #f1f1f1;
    padding: 20px;
    position: static;
  `;

  const OutletContainer = styled.div`
    flex-grow: 1;
    padding: 20px;
  `;

  const FooterContainer = styled.div`
    background-color: #f1f1f1;
    padding: 20px;
  `;

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}

export default Layout;
