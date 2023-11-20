import * as S from "./styles";
import Post from "../../components/Post/Post";
import { useLoaderData } from "react-router-dom";
import { IPost } from "../../types/post";
import PageSuspense from "../../components/PageSuspense";

const Posts = () => {
  const { posts } = useLoaderData() as { posts: IPost[] };

  return (
    <PageSuspense resolve={posts}>
      {(postsData) => (
        <S.Wrapper>
          {(postsData as IPost[]).map(({ title, body, id, userId }) => (
            <Post title={title} body={body} key={id} userId={userId} />
          ))}
        </S.Wrapper>
      )}
    </PageSuspense>
  );
};

export default Posts;
