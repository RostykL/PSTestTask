import * as S from "./styles";
import { useSetParam } from "../../../hooks/useSetParam/useSetParam";
import { SortBy } from "../../../types/common";
import { useLocation } from "react-router-dom";
import { EXCLUDE_SORT_BY_FROM } from "../../../constants/common";

const SubHeader = () => {
  const [searchUsername, setSearchUsername] = useSetParam("sortBy", SortBy.ASC);

  const location = useLocation();

  const isHideSubHeader = EXCLUDE_SORT_BY_FROM.some((route) =>
    location.pathname.startsWith(route)
  );

  if (isHideSubHeader) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.SortLabel>Sort username:</S.SortLabel>
      <S.RadioContainer>
        <S.RadioButtonLabel>
          <S.RadioButtonInput
            type="radio"
            value="asc"
            checked={searchUsername === "asc"}
            onChange={setSearchUsername}
          />
          ASC
        </S.RadioButtonLabel>
        <S.RadioButtonLabel>
          <S.RadioButtonInput
            type="radio"
            value="desc"
            checked={searchUsername === "desc"}
            onChange={setSearchUsername}
          />
          DESC
        </S.RadioButtonLabel>
      </S.RadioContainer>
    </S.Wrapper>
  );
};

export default SubHeader;
