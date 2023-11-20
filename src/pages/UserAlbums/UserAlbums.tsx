import * as S from "./styles";
import { useLoaderData } from "react-router-dom";
import { IAlbums } from "../../types/album";
import Album from "../../components/Album";
import PageSuspense from "../../components/PageSuspense";

const UserAlbums = () => {
  const { albums } = useLoaderData() as { albums: IAlbums[] };

  return (
    <PageSuspense resolve={albums}>
      {(albumsData) => {
        return (
          <S.Wrapper>
            {(albumsData as IAlbums[]).map(({ title, id, userId }) => (
              <Album title={title} key={id} userId={userId} />
            ))}
          </S.Wrapper>
        );
      }}
    </PageSuspense>
  );
};

export default UserAlbums;
