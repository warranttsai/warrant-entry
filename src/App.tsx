// modules
import { Route, Routes } from "react-router-dom";
// css
import "./App.css";
// pages
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import AboutMe from "./pages/about-me/AboutMe";
import MyMajority from "./pages/my-majority/MyMajority";
import WorkingExperience from "./pages/working-experience/WorkingExperience";
import OtherExperience from "./pages/other-experience/OtherExperience";
import MyHobbies from "./pages/my-hobbies/MyHobbies";
import ContactWithMe from "./pages/contact-with-me/ContactWithMe";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/*" element={<Layout />}>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="my-majority" element={<MyMajority />} />
        <Route path="working-experience" element={<WorkingExperience />} />
        <Route path="other-experience" element={<OtherExperience />} />
        <Route path="my-hobbies" element={<MyHobbies />} />
        <Route path="contact-with-me" element={<ContactWithMe />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
