import * as S from "./styles";
import { ROUTES } from "../../constants/routes";
import { useSearchParams } from "react-router-dom";

export interface UserProps {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
}

const User = ({ name, username, email, phone, id }: UserProps) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const onNavigate = () => {
    // setSearchParams(username);
  };

  return (
    <S.Wrapper>
      <S.Column>
        <S.Label>{username}</S.Label>
        <S.Value>{name}</S.Value>
      </S.Column>
      <S.Column>
        <S.Label>Email</S.Label>
        <S.Value>{email}</S.Value>
      </S.Column>
      <S.Column>
        <S.Label>Phone</S.Label>
        <S.Value>{phone}</S.Value>
      </S.Column>

      <S.CTAButtonsWrapper>
        <S.ViewAlbums to={ROUTES.USER_ALBUMS(id)} onClick={onNavigate}>
          View Albums
        </S.ViewAlbums>
        <S.ViewPosts to={ROUTES.POSTS}>View Posts</S.ViewPosts>
        <S.ViewPosts to={ROUTES.USER_DETAILS(id)}>User Details</S.ViewPosts>
      </S.CTAButtonsWrapper>
    </S.Wrapper>
  );
};

export default User;
