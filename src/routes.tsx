import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import { ROUTES } from "./constants/routes";
import UserAlbums from "./pages/UserAlbums";
import Posts from "./pages/Posts";
import UserDetails from "./pages/UserDetails";
import UserPosts from "./pages/UserPosts";

export const router = createBrowserRouter([
  {
    path: ROUTES.USERS,
    element: <Layout />,
    children: [
      {
        index: true,
        path: ROUTES.USERS,
        element: <Users />,
      },
      {
        path: ROUTES.ALBUMS,
        element: <Albums />,
      },
      {
        path: ROUTES.POSTS,
        element: <Posts />,
      },
      {
        path: ROUTES.USER_DETAILS(":userId"),
        element: <UserDetails />,
      },
      {
        path: ROUTES.USER_ALBUMS(":userId"),
        element: <UserAlbums />,
      },
      {
        path: ROUTES.USER_POSTS(":userId"),
        element: <UserPosts />,
      },
    ],
  },
]);
