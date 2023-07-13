// modules
import { Route, Routes } from "react-router-dom";
// css
import "./App.css";
// pages
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import AboutMe from "./pages/about-me/AboutMe";
import ContactWithMe from "./pages/contact-with-me/ContactWithMe";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/*" element={<Layout />}>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="my-majority" element={<AboutMe />} />
        <Route path="working-experience" element={<AboutMe />} />
        <Route path="other-experience" element={<AboutMe />} />
        <Route path="my-hobbies" element={<AboutMe />} />
        <Route path="contact-with-me" element={<ContactWithMe />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
