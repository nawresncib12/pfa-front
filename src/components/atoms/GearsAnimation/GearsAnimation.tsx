import { faGear } from "@fortawesome/free-solid-svg-icons";
import * as S from "./GearsAnimation.styles";
import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { generateRandomPastel } from "../../../utils";

const GearsAnimation = () => {
  const theme = useTheme();
  const [gearColors, setGearColors] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGearColors([
        generateRandomPastel(theme),
        generateRandomPastel(theme),
        generateRandomPastel(theme)
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [generateRandomPastel, theme]);

  return (
    <S.GearsAnimationContainer>
      <S.BiggerGearsAnimationContainer>
        <S.GearWrapper
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          <S.Gear icon={faGear} style={{ color: gearColors[0] || generateRandomPastel(theme) }} />
        </S.GearWrapper>
        <S.GearWrapper
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          <S.Gear icon={faGear} style={{ color: gearColors[1] || generateRandomPastel(theme) }} />
        </S.GearWrapper>
        <S.GearWrapper
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          <S.Gear icon={faGear} style={{ color: gearColors[2] || generateRandomPastel(theme) }} />
        </S.GearWrapper>
      </S.BiggerGearsAnimationContainer>
    </S.GearsAnimationContainer>
  );
};

export default GearsAnimation;
