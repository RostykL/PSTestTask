export const ROUTES = {
  ALBUMS: "/albums",
  POSTS: "/posts",
  USERS: "/",
  USER_DETAILS: (userId: number | string) => `/user/${userId}`,
  USER_ALBUMS: (userId: number | string) => `/albums/${userId}`,
};
