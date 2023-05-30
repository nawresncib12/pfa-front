import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Header.style";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Typography from "../../atoms/Typography/Typography.styles";
import { useTheme } from "styled-components";

const Header = () => {
  const theme = useTheme();
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
        <Typography.H1 fontSize="4xl" weight="semiBold" color={theme.colors.primary[300]}>
          Mealos
        </Typography.H1>
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
