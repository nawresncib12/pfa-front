import * as S from "./AboutUs.style";
import aboutUs from "../.././../assets/images/aboutUs.png";
import Typography from "../../atoms/Typography/Typography.styles";
import { useTheme } from "styled-components";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <S.AboutUsContainer id="heroNext">
      <S.AboutUsInfo>
        <Typography.H1 fontSize="4xl" color={theme.colors.primary[500]}>
          About us
        </Typography.H1>
        <Typography.Base fontSize="xl" weight="normal" color={theme.colors.gray[500]}>
          Unlock Culinary Creativity with Mealos
        </Typography.Base>
        <S.AboutUsImage view="mobile" src={aboutUs} alt="aboutUs"></S.AboutUsImage>
        <Typography.Base align="center">
          Welcome to Mealos, your gateway to culinary exploration! Our AI-powered platform
          revolutionizes the way you cook. Snap a photo of your ingredients, and watch as Mealos
          detects and suggests amazing recipes based on your unique preferences. Experience the joy
          of personalized cooking with Mealos.
        </Typography.Base>
      </S.AboutUsInfo>
      <S.AboutUsImage view="desktop" src={aboutUs} alt="aboutUs"></S.AboutUsImage>
    </S.AboutUsContainer>
  );
};

export default AboutUs;
