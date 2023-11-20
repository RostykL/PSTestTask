import { Outlet } from "react-router-dom";

import * as S from "./styles";
import Header from "./Header";

const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Wrapper>
  );
};

export default Layout;
