import About from "../pages/About";
import PagePosts from "../pages/PagePosts";
import Page404 from "../pages/Page404";
import PageHome from "../pages/PageHome";
import PageIdPost from "../pages/PageIdPost";

export const routes = [
  { path: "/", component: <PageHome />, exact: true },
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <PagePosts />, exact: true },
  { path: "/posts/:id", component: <PageIdPost />, exact: true },
  { path: "*", component: <Page404 />, exact: false },
];
