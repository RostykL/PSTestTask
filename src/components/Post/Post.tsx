import * as S from "./styles";
import { ROUTES } from "../../constants/routes";

export interface PostProps {
  title: string;
  body: string;
  userId: number;
}

const Post = ({ title, body, userId }: PostProps) => {
  return (
    <S.Wrapper>
      <S.InformationWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{body}</S.Description>
      </S.InformationWrapper>
      <S.PostedByLink to={ROUTES.USER_DETAILS(userId)}>
        View Author
      </S.PostedByLink>
    </S.Wrapper>
  );
};

export default Post;
