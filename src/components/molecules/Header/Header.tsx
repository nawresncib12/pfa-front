import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Header.style";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const manageHeader = () => {
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setOpen(!isOpen);
  };

  return (
    <div>
      <S.Header>
        <h1 style={{ margin: 10, left: "20px", position: "absolute" }}>Mealos</h1>

        <S.Button onClick={manageHeader}>
          {isOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
        </S.Button>
      </S.Header>
      {isOpen && (
        <S.Overlay $isOpen={isOpen}>
          <S.Paramter>
            <h1>Profile</h1>
          </S.Paramter>
          <S.Paramter>
            <h1>Settings</h1>
          </S.Paramter>
        </S.Overlay>
      )}
    </div>
  );
};
export default Header;
