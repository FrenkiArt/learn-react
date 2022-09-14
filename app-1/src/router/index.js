import About from "../pages/About";
import PagePosts from "../pages/PagePosts";
import Page404 from "../pages/Page404";
import PageHome from "../pages/PageHome";
import PageIdPost from "../pages/PageIdPost";
import Login from "../pages/Login";
import PageAltPosts from "../pages/PageAltPosts";

export const privateRoutes = [
  { path: "/", component: <PageHome />, exact: true },
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <PagePosts />, exact: true },
  { path: "/posts/:id", component: <PageIdPost />, exact: true },
  { path: "/altposts", component: <PageAltPosts />, exact: true },
  { path: "*", component: <Page404 />, exact: false },
];

export const publicRoutes = [
  { path: "/login", component: <Login />, exact: true },
  { path: "*", component: <Login />, exact: false },
];
