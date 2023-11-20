import { Outlet } from "react-router-dom";

import * as S from "./styles";
import Header from "./Header";
import SubHeader from "./SubHeader";

const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <SubHeader />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Wrapper>
  );
};

export default Layout;
