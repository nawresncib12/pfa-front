import { Button } from "../../atoms/Button/Button.styles";
import CardStack from "../../molecules/CardStack/CardStack";
import { useTranslate } from "../../../lang/useTranslate";
import * as S from "./QuizzCards.style";
const QuizzCards = () => {
  const { t } = useTranslate();

  return (
    <div>
      <CardStack>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>1</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>2</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>3</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>4</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>5</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>6</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>7</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>8</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>9</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>10</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>11</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "beige",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>12</p>
        </div>
      </CardStack>
      <S.QuizzButtons>
        <Button>{t("actions.next")}</Button>
        <Button>{t("actions.back")}</Button>
      </S.QuizzButtons>
    </div>
  );
};

export default QuizzCards;
