import User from "../../components/User";
import * as S from "./styles";
import { useSearchParams } from "react-router-dom";
import { filterUsersByUsername } from "../../utils/filterUsersByUsername";
import { useQuery } from "react-query";
import { fetchUsers } from "../../utils/fetch/fetchUsers";
import { SortBy } from "../../types/common";

const Users = () => {
  const {
    data: usersData,
    isLoading,
    isError,
  } = useQuery("users", fetchUsers, { refetchOnMount: false });

  let [searchParams] = useSearchParams();

  if (isLoading) {
    return <div>is loading</div>;
  }

  if (isError) {
    return <div>is error</div>;
  }

  const username = searchParams.get("username") || "";
  const sortByType = searchParams.get("sortBy") as SortBy;

  const filterByUsername = filterUsersByUsername(
    usersData,
    username,
    sortByType
  );

  return (
    <S.Wrapper>
      {filterByUsername.map(({ name, username, email, phone, id }) => (
        <User
          email={email}
          id={id}
          key={id}
          name={name}
          phone={phone}
          username={username}
        />
      ))}
    </S.Wrapper>
  );
};

export default Users;
