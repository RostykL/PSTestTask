import { createContext, ReactNode, useContext, useMemo } from "react";
import { IUser } from "../types/user";
import {
  DefaultError,
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from "@tanstack/react-query";
import { fetchUsers } from "../utils/fetch/fetchUsers";

interface userContextProps {
  users: IUser[];
  isLoading: boolean;
  isError: boolean;
}

const userContext = createContext<userContextProps>({
  users: [],
  isLoading: false,
  isError: false,
});

export const useUsers = () => {
  const users = useContext(userContext);

  if (!users) {
    throw new Error("useUsersContext must be wrapped ");
  }

  return users;
};

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  } as UndefinedInitialDataOptions<unknown, DefaultError, IUser[], QueryKey>);

  const values = useMemo(
    () => ({ users, isLoading, isError }),
    [users, isLoading, isError]
  );

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export default UsersProvider;
