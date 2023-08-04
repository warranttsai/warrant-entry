// modules
import { Outlet } from "react-router-dom";
// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  HeaderContainer,
  LayoutContainer,
  OutletContainer,
} from "../../components/styled-component/Container";

function Layout() {
  return (
    <LayoutContainer id="layout-container">
      <HeaderContainer id="header-container">
        <Header />
      </HeaderContainer>
      <OutletContainer id="outlet-container">
        <Outlet />
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
