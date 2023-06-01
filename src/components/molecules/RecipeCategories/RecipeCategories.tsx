import * as S from "./RecipeCategories.style";
import aboutUs from "../.././../assets/images/aboutUs.png";
import Typography from "../../atoms/Typography/Typography.styles";

const RecipeCategories = () => {
  return (
    <S.AboutUsContainer id="heroNext">
      <S.AboutUsInfo>
        <Typography.Base>About us</Typography.Base>
        <Typography.Base>
          About us About us About us About us About us About us About us About us About us About us
          About us About us About us About us About us About us About us About us About us About us
          About us About us About us About us About us About us About us About us About us About us
          About us About us About us About us About us About us About us About us About us About us
          About us About us About us About us About us About us About us About us About us About us
          About us About us About us About us About us About us{" "}
        </Typography.Base>
      </S.AboutUsInfo>
      <S.AboutUsImage src={aboutUs} alt="aboutUs"></S.AboutUsImage>
    </S.AboutUsContainer>
  );
};

export default RecipeCategories;
