import { IUser } from "../types/user";
import { includes, orderBy } from "lodash";
import { SortBy } from "../types/common";

export const filterUsersByUsername = (
  users: IUser[],
  username: string,
  sortBy: SortBy = SortBy.ASC
) => {
  const filterUsers = users.filter((user) =>
    includes(user.username.toLowerCase(), username.toLowerCase())
  );

  return orderBy(filterUsers, ["username"], [sortBy]);
};
