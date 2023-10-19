// modules
import { Route, Routes } from "react-router-dom";
// css
import "./App.scss";
// pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AboutMe from "./pages/AboutMe";
import LearningPath from "./pages/LearningPath";
import MySideProjects from "./pages/MySideProjects";
import WorkingExperience from "./pages/WorkingExperience";
import MyHobbies from "./pages/MyHobbies";
import NotFoundPage from "./pages/NotFoundPage";
import MyCodingBible from "./pages/MyCodingBible";
// lab components
import Lab from "./pages/Lab";
// import {
//   Challenge1,
//   Challenge2,
//   Challenge3,
//   Challenge4,
// } from "./components/react-challenge/ReactChallenges";
// import AboutThisWebApp from "./components/about-this-web-app/AboutThisWebApp";

function App() {
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
        {/* <Route path="lab/about-this-web-app" element={<AboutThisWebApp />} />
        <Route path="lab/react-challenge-1" element={<Challenge1 />} />
        <Route path="lab/react-challenge-2" element={<Challenge2 />} />
        <Route path="lab/react-challenge-3" element={<Challenge3 />} />
        <Route path="lab/react-challenge-4" element={<Challenge4 />} /> */}
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
