import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

import { useSetParam } from "../../../hooks/useSetParam/useSetParam";
import { useLocation, useSearchParams } from "react-router-dom";
import { SHOW_SEARCH_INPUT_FOR_ROUTES } from "../../../constants/common";
import { appendSearchToURL } from "../../../utils/appendSearchToURL";

const Header = () => {
  const [searchParams] = useSearchParams();
  const [searchUsername, setSearchUsername] = useSetParam("username", "");

  const location = useLocation();

  const isShowSearchField = SHOW_SEARCH_INPUT_FOR_ROUTES.includes(
    location.pathname
  );

  return (
    <S.Wrapper>
      <S.CTAButtonsWrapper>
        <S.NavButton
          to={{
            pathname: ROUTES.USERS,
            search: appendSearchToURL(searchParams, "sortBy"),
          }}
        >
          Users
        </S.NavButton>
        <S.NavButton
          to={{
            pathname: ROUTES.ALBUMS,
            search: appendSearchToURL(searchParams, "sortBy"),
          }}
        >
          Albums
        </S.NavButton>
        <S.NavButton
          to={{
            pathname: ROUTES.POSTS,
            search: appendSearchToURL(searchParams, "sortBy"),
          }}
        >
          Posts
        </S.NavButton>
      </S.CTAButtonsWrapper>

      {isShowSearchField ? (
        <S.SearchField
          placeholder="Search by username"
          onChange={setSearchUsername}
          value={searchUsername}
        />
      ) : null}
    </S.Wrapper>
  );
};

export default Header;
