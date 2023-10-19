// modules
import { Outlet } from "react-router-dom";
// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Flex1,
  HeaderContainer,
  LayoutContainer,
} from "../components/styled-component/Container";

function Layout() {
  return (
    <LayoutContainer id="layout-container">
      <HeaderContainer id="header-container">
        <Header />
      </HeaderContainer>
      <Flex1 id="outlet-container">
        <Outlet />
      </Flex1>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
