import * as S from "./styles";
import { ROUTES } from "../../constants/routes";
import { appendSearchToURL } from "../../utils/appendSearchToURL";
import { useSearchParams } from "react-router-dom";
import { UserProps } from "./types";

const User = ({ name, username, email, phone, id }: UserProps) => {
  const [searchParams] = useSearchParams();

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
        <S.ViewAlbums
          to={{
            pathname: ROUTES.USER_ALBUMS(id),
            search: appendSearchToURL(searchParams, "sortBy"),
          }}
        >
          View Albums
        </S.ViewAlbums>
        <S.ViewPosts
          to={{
            pathname: ROUTES.POSTS,
            search: appendSearchToURL(searchParams, "sortBy"),
          }}
        >
          View Posts
        </S.ViewPosts>
        <S.ViewPosts
          to={{
            pathname: ROUTES.USER_DETAILS(id),
            search: appendSearchToURL(searchParams, "sortBy"),
          }}
        >
          User Details
        </S.ViewPosts>
      </S.CTAButtonsWrapper>
    </S.Wrapper>
  );
};

export default User;
