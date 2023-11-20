import * as S from "./styles";
import { useParams, useSearchParams } from "react-router-dom";
import Album from "../../components/Album";
import { useQuery } from "react-query";
import { fetchAlbums } from "../../utils/fetch/fetchAlbums";
import { SortBy } from "../../types/common";
import { orderBy } from "lodash";

const UserAlbums = () => {
  let [searchParams] = useSearchParams();
  const { userId } = useParams();

  const {
    data: userAlbums,
    isLoading,
    isError,
  } = useQuery("user-albums", () => fetchAlbums(userId), {
    refetchOnMount: false,
    enabled: !!userId,
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
      {orderBy(userAlbums, ["title"], [sortByType]).map(
        ({ title, id, userId }) => (
          <Album title={title} key={id} userId={userId} />
        )
      )}
    </S.Wrapper>
  );
};

export default UserAlbums;
