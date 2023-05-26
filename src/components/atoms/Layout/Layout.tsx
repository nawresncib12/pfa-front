import { PropsWithChildren } from "react";
import * as S from "./Layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <S.Layout>
      {
        //navbar
      }
      <S.Body>{children}</S.Body>
      {
        //footer
      }
    </S.Layout>
  );
};

export default Layout;
