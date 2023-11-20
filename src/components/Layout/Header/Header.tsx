import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      username: event.target.value,
    });
  };

  return (
    <S.Wrapper>
      <S.CTAButtonsWrapper>
        <S.NavButton to={ROUTES.USERS}>Users</S.NavButton>
        <S.NavButton to={ROUTES.ALBUMS}>Albums</S.NavButton>
        <S.NavButton to={ROUTES.POSTS}>Posts</S.NavButton>
      </S.CTAButtonsWrapper>

      <S.SearchField
        placeholder="Search by username"
        onChange={handleSearchChange}
      />
    </S.Wrapper>
  );
};

export default Header;
