// modules
import { Route, Routes, Outlet } from "react-router-dom";
// css
import "./App.scss";
// pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import LearningPath from "./pages/LearningPath";
import MySideProjects from "./pages/MySideProjects";
import WorkingExperience from "./pages/WorkingExperience";
import MyHobbies from "./pages/MyHobbies";
import NotFoundPage from "./pages/NotFoundPage";
import MyCodingBible from "./pages/MyCodingBible";
import Lab from "./pages/Lab";
// components
import {
  Flex1,
  HeaderContainer,
  LayoutContainer,
} from "./components/styled-component/Container";

export function Layout() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/*" element={<Layout />}>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="learning-path" element={<LearningPath />} />
        <Route path="my-side-projects" element={<MySideProjects />} />
        <Route path="my-coding-bible" element={<MyCodingBible />} />
        <Route path="working-experience" element={<WorkingExperience />} />
        <Route path="my-hobbies" element={<MyHobbies />} />
        <Route path="lab" element={<Lab />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}
