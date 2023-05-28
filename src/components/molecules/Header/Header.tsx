import * as S from "./Header.style";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const manageHeader = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "quto";
    }
    setOpen(!isOpen);
  };

  return (
    <div>
    <S.Header>
      <h1 style={{ margin: 10, left: "20px", position: "absolute" }}>Mealos</h1>

      <S.Button
        style={{ margin: 10, right: "20px", position: "absolute" }}
        onClick={manageHeader}
      >
        {isOpen ? "X" : "..."}
      </S.Button>
    </S.Header>
      {isOpen && <S.Overlay>
        <S.Separator></S.Separator>
        <S.Paramter>
        <h1>
        profile
        </h1>
        </S.Paramter>
        <S.Separator></S.Separator>
        <S.Paramter>
        <h1>
        settings
        </h1>
        </S.Paramter>
        <S.Separator></S.Separator>
        </S.Overlay>}
      </div>
);
};
export default Header;
