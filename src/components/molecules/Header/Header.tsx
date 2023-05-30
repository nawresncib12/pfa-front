import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Header.style";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
        <S.Button onClick={manageHeader}>
          {isOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
        </S.Button>
        <a href="http://localhost:3000/catalog">
          <h1>Mealos</h1>
        </a>
        <S.InstaIcon href="https://insat.rnu.tn/">
          <FontAwesomeIcon size="2xl" icon={faInstagram} />
        </S.InstaIcon>
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
