import * as Avatar from "@radix-ui/react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Card.style";
import "./Card.style.css";
import { Recipe } from "../../../pages/recipe/types";
import { Link } from "react-router-dom";

type CardProps = {
  recipe: Recipe;
};
export const Card = ({ recipe }: CardProps) => {
  return (
    <S.Card>
      <S.Card_img>
        <img
          src={recipe.images?.LARGE?.url ?? recipe.images?.REGULAR?.url ?? recipe.image}
          alt="user-image"
        />
      </S.Card_img>
      <S.Card_info>
        <S.Title to={`/recipe/${recipe.id}`}>{recipe.label}</S.Title>
        <S.Description>Source: {recipe.source}</S.Description>
        <S.Likes>
          <FontAwesomeIcon className="NotifHeartIcon" icon={faHeart}></FontAwesomeIcon>
          <div>{recipe.likes}</div>
        </S.Likes>
        <hr className="rounded"></hr>
        <div className="receiptInfo">
          <h5>Time</h5>
          <h5>calories</h5>
          <h5 style={{ margin: "10px", color: "gray" }}>{recipe.totalTime}</h5>
          <h5 style={{ margin: "10px", color: "gray" }}>{recipe.calories.toFixed(2)}</h5>
        </div>
        <hr className="rounded"></hr>
        <div style={{ gap: 20 }}>
          {recipe.ingredients.slice(0, 4).map((ingredient) => {
            return (
              <Avatar.Root className="AvatarRoot" key={ingredient.foodId}>
                <Avatar.Image className="AvatarImage" src={ingredient.image} />
              </Avatar.Root>
            );
          })}
          {recipe.ingredients && recipe.ingredients.length > 4 && (
            <Avatar.Root className="AvatarRoot">
              <S.Circle>+{recipe.ingredients.length - 4}</S.Circle>
            </Avatar.Root>
          )}
        </div>
      </S.Card_info>
    </S.Card>
  );
};
export default Card;
