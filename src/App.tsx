// modules
import { Route, Routes } from "react-router-dom";
// css
import "./App.scss";
// pages
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import AboutMe from "./pages/about-me/AboutMe";
import LearningPath from "./pages/learning-path/LearningPath";
import MySideProjects from "./pages/my-side-projects/MySideProjects";
import WorkingExperience from "./pages/working-experience/WorkingExperience";
import MyHobbies from "./pages/my-hobbies/MyHobbies";
import ContactWithMe from "./pages/contact-with-me/ContactWithMe";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
// lab components
import Lab from "./pages/lab/Lab";
import {
  Challenge1,
  Challenge2,
  Challenge3,
  Challenge4,
} from "./components/react-challenge/ReactChallenges";
import AboutThisWebApp from "./pages/lab/about-this-web-app/AboutThisWebApp";
import MyCodingBible from "./pages/lab/my-coding-bible/MyCodingBible";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/*" element={<Layout />}>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="learning-path" element={<LearningPath />} />
        <Route path="my-side-projects" element={<MySideProjects />} />
        <Route path="working-experience" element={<WorkingExperience />} />
        <Route path="my-hobbies" element={<MyHobbies />} />
        <Route path="contact-with-me" element={<ContactWithMe />} />
        {/* Laboratory routes */}
        <Route path="lab" element={<Lab />} />
        <Route path="lab/about-this-web-app" element={<AboutThisWebApp />} />
        <Route path="lab/react-challenge-1" element={<Challenge1 />} />
        <Route path="lab/react-challenge-2" element={<Challenge2 />} />
        <Route path="lab/react-challenge-3" element={<Challenge3 />} />
        <Route path="lab/react-challenge-4" element={<Challenge4 />} />
        <Route path="lab/my-coding-bible" element={<MyCodingBible />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
