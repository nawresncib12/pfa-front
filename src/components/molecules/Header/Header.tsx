import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Header.style";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

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
        <S.Button
          onClick={manageHeader}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </S.Button>

        <h1>
          Mealos
        </h1>
        <FontAwesomeIcon size='10x' icon={faInstagram} />

      </S.Header>
      {isOpen && 
      <S.Overlay $isOpen={isOpen}>
        <S.Paramter>
          <h1>Profile</h1>
        </S.Paramter>
        <S.Paramter>
          <h1>Settings</h1>
        </S.Paramter>
      </S.Overlay>}
    </div>
  );
};
export default Header;
