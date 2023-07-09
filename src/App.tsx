// modules
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// css
import "./App.css";
// pages
import Home from "./pages/home/Home";
import AboutMe from "./pages/about-me/AboutMe";
import LearningPath from "./pages/learning-path/LearningPath";
import Hobby from "./pages/hobby/Hobby";
import ContactWithMe from "./pages/contact-with-me/ContactWithMe";
import Layout from "./pages/layout/Layout";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/*" element={<Layout />}>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="learning-path" element={<LearningPath />} />
        <Route path="hobby" element={<Hobby />} />
        <Route path="contact-with-me" element={<ContactWithMe />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
