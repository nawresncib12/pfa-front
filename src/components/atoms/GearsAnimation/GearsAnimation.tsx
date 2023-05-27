import { faGear } from "@fortawesome/free-solid-svg-icons";
import * as S from "./GearsAnimation.styles";

const GearsAnimation = () => {
  return (
    <S.GearsAnimationContainer>
      <S.BiggerGearsAnimationContainer>
        <S.GearWrapper
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <S.Gear icon={faGear} />
        </S.GearWrapper>
        <S.GearWrapper
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <S.Gear icon={faGear} />
        </S.GearWrapper>
        <S.GearWrapper
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <S.Gear icon={faGear} />
        </S.GearWrapper>
      </S.BiggerGearsAnimationContainer>
    </S.GearsAnimationContainer>
  );
};

export default GearsAnimation;
