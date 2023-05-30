import { useTheme } from "styled-components";
import Typography from "../Typography/Typography.styles";
import * as S from "./IngredientCard.style";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type IngredientCardProps = {
  ingredient: string;
  removeIngredient?: (value: string) => void;
};

const IngredientCard = ({ ingredient, removeIngredient }: IngredientCardProps) => {
  const theme = useTheme();

  return (
    <S.IngredientCardContainer>
      <Typography.Base weight="semiBold" fontSize="lg" color={theme.colors.gray[800]}>
        {ingredient}
      </Typography.Base>
      <S.RemoveIcon
        icon={faClose}
        onClick={() => {
          removeIngredient?.(ingredient);
        }}
      />
    </S.IngredientCardContainer>
  );
};

export default IngredientCard;
