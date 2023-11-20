import * as S from "./styles";
import Album from "../../components/Album";
import { useQuery } from "react-query";
import { fetchAlbums } from "../../utils/fetch/fetchAlbums";
import { orderBy } from "lodash";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "../../types/common";

const Albums = () => {
  let [searchParams] = useSearchParams();

  const {
    data: albums,
    isLoading,
    isError,
  } = useQuery("albums", () => fetchAlbums(), {
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
      {orderBy(albums, ["title"], [sortByType]).map(({ title, id, userId }) => (
        <Album title={title} key={id} userId={userId} />
      ))}
    </S.Wrapper>
  );
};

export default Albums;
