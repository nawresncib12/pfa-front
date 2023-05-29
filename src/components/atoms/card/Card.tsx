import * as Separator from '@radix-ui/react-separator';
import * as Avatar from '@radix-ui/react-avatar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as S from './Card.style';
import './Card.style.css';
import heart from './heart.png';

export const Card = ({recipie}: any) =>{
    return (
    <S.Card> 
    <S.Card_img> 
        <img src={recipie.image} alt="user-image"/>
    </S.Card_img>
    <S.Card_info>
        <h4>{recipie.name}</h4>
        <S.Likes>
    <FontAwesomeIcon className="NotifHeartIcon" icon={faHeart}></FontAwesomeIcon>        <div>12</div>
        </S.Likes>
        <hr className="rounded"></hr>
        <div className="receiptInfo">
        <h5>Time</h5>
        <h5>calories</h5>
        <h5 style={{margin: '10px',color: 'gray'}}>{recipie.time}</h5>
        <h5 style={{margin: '10px',color:'gray'}}> {recipie.calories}</h5>
        </div>
        <hr className="rounded"></hr>
    <div style={{ gap: 20 }}>
    {recipie.ingedients.map((image:string) => {
        return (
        <Avatar.Root className="AvatarRoot">
        <Avatar.Image
            className="AvatarImage"
            src={image}
            alt="Colm Tuite"
        />
    </Avatar.Root>)
    })}
        </div>
    </S.Card_info>
</S.Card>
    )
} 
export default Card;