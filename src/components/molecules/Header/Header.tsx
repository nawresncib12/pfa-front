import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Header.style";
import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import * as Typography from "../../atoms/Typography/Typography.styles";

const Header = () => {
  const theme = useTheme();
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const manageHeader = () => {
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setOpen(!isOpen);
  };
  const handleClickLog = () => {
    if (token === null) {
      navigate("/auth/login");
    } else {
      logout();
    }
    setOpen(false);
  };

  const handleClickProfile = () => {
    navigate("/profile");
    setOpen(false);
  };

  const handleClickSearch = () => {
    navigate("/recipes");
    setOpen(false);
  };

  const handleClickPreferences = () => {
    navigate("/profile/preferences");
    setOpen(false);
  };

  const handleClickHeader = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <div>
      <S.Header>
        <Typography.H1 fontSize="4xl" weight="semiBold" color={theme.colors.primary[300]}>
          <span style={{ cursor: "pointer" }} onClick={handleClickHeader}>
            Mealos
          </span>
        </Typography.H1>
        <S.Button onClick={manageHeader}>
          {isOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
        </S.Button>
      </S.Header>
      {isOpen && (
        <S.Overlay $isOpen={isOpen}>
          {token !== null && (
            <>
              <S.Parameter onClick={handleClickProfile}>
                <h1>Profile</h1>
              </S.Parameter>
              <S.Parameter onClick={handleClickPreferences}>
                <h1>Preferences</h1>
              </S.Parameter>
              <S.Parameter onClick={handleClickSearch}>
                <h1>Search recipe</h1>
              </S.Parameter>
            </>
          )}
          <S.Parameter onClick={handleClickLog}>
            <h1>{token === null ? "Login" : "Logout"}</h1>
          </S.Parameter>
        </S.Overlay>
      )}
    </div>
  );
};
export default Header;
