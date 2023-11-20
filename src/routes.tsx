import { createBrowserRouter, defer } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import { ROUTES } from "./constants/routes";
import UserAlbums from "./pages/UserAlbums";
import { fetchAlbums } from "./utils/fetch/fetchAlbums";
import Posts from "./pages/Posts";
import { fetchPosts } from "./utils/fetch/fetchPosts";
import UserDetails from "./pages/UserDetails";
import { fetchUserDetails } from "./utils/fetch/fetchUserDetails";
import { fetchUsers } from "./utils/fetch/fetchUsers";

export const router = createBrowserRouter([
  {
    path: ROUTES.USERS,
    element: <Layout />,
    children: [
      {
        index: true,
        path: ROUTES.USERS,
        element: <Users />,
        loader: async () => {
          const users = fetchUsers();

          return defer({
            users,
          });
        },
      },
      {
        path: ROUTES.ALBUMS,
        element: <Albums />,
        loader: async () => {
          const albums = fetchAlbums();

          return defer({
            albums,
          });
        },
      },
      {
        path: ROUTES.POSTS,
        element: <Posts />,
        loader: async () => {
          const posts = fetchPosts();

          return defer({
            posts,
          });
        },
      },
      {
        path: ROUTES.USER_DETAILS(":userId"),
        element: <UserDetails />,
        loader: async ({ params }) => {
          const user = fetchUserDetails(params.userId);

          return defer({
            user,
          });
        },
      },
      {
        path: ROUTES.USER_ALBUMS(":userId"),
        element: <UserAlbums />,
        loader: async ({ params }) => {
          const albums = fetchAlbums(params.userId);

          return defer({
            albums,
          });
        },
      },
    ],
  },
]);
