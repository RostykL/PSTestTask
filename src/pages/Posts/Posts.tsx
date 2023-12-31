import * as S from "./styles";
import Post from "../../components/Post/Post";
import { useQuery } from "react-query";
import { fetchPosts } from "../../utils/fetch/fetchPosts";
import { orderBy } from "lodash";
import { SortBy } from "../../types/common";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
  let [searchParams] = useSearchParams();

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery("posts", () => fetchPosts(), {
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div>is loading</div>;
  }

  if (isError) {
    return <div>is error</div>;
  }

  const sortByType = searchParams.get("sortBy") as SortBy;

  return (
    <S.Wrapper>
      {orderBy(posts, ["title"], [sortByType]).map(
        ({ title, body, id, userId }) => (
          <Post title={title} body={body} key={id} userId={userId} />
        )
      )}
    </S.Wrapper>
  );
};

export default Posts;
