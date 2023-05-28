import * as Separator from '@radix-ui/react-separator';
import * as Avatar from '@radix-ui/react-avatar';

import './Card.style.css';
import heart from './heart.png';

export const Card = () =>{
    return (
    <div className="card"> 
    <div className="card_img"> 
        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image"/>
    </div>

    <div className="card_info">
        <h4>jilbena</h4>
        <span className="likes">
        <img className="heart"src={heart}></img>
        <div>12</div>
        </span>
        <hr className="rounded"></hr>

        <div className="receiptInfo">
        <h5>Time</h5>
        <h5>calories</h5>
        <h6>30</h6>
        <h6>445</h6>
        </div>
    <hr className="rounded"></hr>
    <div style={{ gap: 20 }}>
        <Avatar.Root className="AvatarRoot">
            <Avatar.Image
                className="AvatarImage"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
            />
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
        <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
        />
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
        <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
        />
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
        <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
        />
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
        <Avatar.Fallback className="AvatarFallback">+5</Avatar.Fallback>
        </Avatar.Root>
        </div>
    </div>
</div>
    )
} 
export default Card;