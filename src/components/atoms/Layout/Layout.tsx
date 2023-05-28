import { PropsWithChildren } from "react";
import Header from '../../molecules/Header/Header';
import * as S from "./Layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <S.Layout>
      
      <Header></Header>

      <S.Body>{children}</S.Body>
      {
        //footer
      }
    </S.Layout>
  );
};

export default Layout;
