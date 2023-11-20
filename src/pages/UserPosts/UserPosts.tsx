import * as S from "./styles";
import Post from "../../components/Post/Post";
import { useQuery } from "react-query";
import { fetchPosts } from "../../utils/fetch/fetchPosts";
import { useParams, useSearchParams } from "react-router-dom";
import { SortBy } from "../../types/common";
import { orderBy } from "lodash";

const UserPosts = () => {
  let [searchParams] = useSearchParams();
  const { userId } = useParams();

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery("user-posts", () => fetchPosts(userId), {
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

export default UserPosts;
