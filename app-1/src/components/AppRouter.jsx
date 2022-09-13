import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PagePosts from "../pages/PagePosts";
import Page404 from "../pages/Page404";
import PageHome from "../pages/PageHome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<PagePosts />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
