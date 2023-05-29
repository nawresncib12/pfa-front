import * as Avatar from "@radix-ui/react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Card.style";
import "./Card.style.css";

export const Card = ({ recipie }: any) => {
  return (
    <S.Card>
      <S.Card_img>
        <img src={recipie.image} alt="user-image" />
      </S.Card_img>
      <S.Card_info>
        <S.Title>{recipie.name}</S.Title>
        <S.Description>{recipie.description}</S.Description>
        <S.Likes>
          <FontAwesomeIcon className="NotifHeartIcon" icon={faHeart}></FontAwesomeIcon>
          <div>{Math.floor(Math.random() * 20)}</div>
        </S.Likes>
        <hr className="rounded"></hr>
        <div className="receiptInfo">
          <h5>Time</h5>
          <h5>calories</h5>
          <h5 style={{ margin: "10px", color: "gray" }}>{recipie.time}</h5>
          <h5 style={{ margin: "10px", color: "gray" }}> {recipie.calories}</h5>
        </div>
        <hr className="rounded"></hr>
        <div style={{ gap: 20 }}>
          {recipie.ingedients.map((image: string, index: number) => {
            return (
              <Avatar.Root key={index} className="AvatarRoot">
                <Avatar.Image className="AvatarImage" src={image} alt="Colm Tuite" />
              </Avatar.Root>
            );
          })}
        </div>
      </S.Card_info>
    </S.Card>
  );
};
export default Card;
