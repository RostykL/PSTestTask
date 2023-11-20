import { IUser } from "../../types/user";
import User from "../../components/User";
import * as S from "./styles";
import { useLoaderData } from "react-router-dom";
import PageSuspense from "../../components/PageSuspense";

const Users = () => {
  const { users } = useLoaderData() as { users: IUser[] };

  return (
    <PageSuspense resolve={users}>
      {(usersData) => {
        return (
          <S.Wrapper>
            {(usersData as IUser[]).map(
              ({ name, username, email, phone, id }) => (
                <User
                  email={email}
                  id={id}
                  key={id}
                  name={name}
                  phone={phone}
                  username={username}
                />
              )
            )}
          </S.Wrapper>
        );
      }}
    </PageSuspense>
  );
};

export default Users;
