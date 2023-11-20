import * as S from "./styles";
import { ROUTES } from "../../constants/routes";
import { AlbumProps } from "./types";

const Album = ({ title, userId }: AlbumProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.PostedByLink to={ROUTES.USER_DETAILS(userId)}>
        View Author
      </S.PostedByLink>
    </S.Wrapper>
  );
};

export default Album;
