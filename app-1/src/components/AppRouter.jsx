import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PagePosts from "../pages/PagePosts";
import Page404 from "../pages/Page404";
import PageHome from "../pages/PageHome";
import PageIdPost from "../pages/PageIdPost";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PageHome />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/posts" element={<PagePosts />} />
      <Route exact path="/posts/:id" element={<PageIdPost />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
