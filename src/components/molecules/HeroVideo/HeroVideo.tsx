import * as S from "./HeroVideo.style";
import hero from "../../../assets/videos/hero-mini-compressed.mp4";
import heroAudio from "../../../assets/audio/heroAudio.m4a";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Typography from "../../atoms/Typography/Typography.styles";
import { useTheme } from "styled-components";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const HeroVideo = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audio = new Audio(heroAudio);

  const handleStart = () => {
    navigate("/recipes");
  };

  const handleScroll = () => {
    console.log("heyy");
    console.log(document.getElementById("heroNext"));
    document.getElementById("heroNext")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const start = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    audio.play();
  };

  return (
    <S.HeroWrapper>
      <S.HeroContainer onClick={stop}>
        <S.HeroInfo>
          <S.HeroInfoStack>
            <Typography.H1 color={theme.colors.white} fontSize="6xl">
              MEALOS
            </Typography.H1>
            <Typography.H1 color={theme.colors.white} fontSize="2xl">
              Suggests your next meal
            </Typography.H1>
          </S.HeroInfoStack>
          <S.HeroInfoStack>
            <Button onClick={handleStart} variant="secondary">
              Start now
            </Button>
            <S.ScrollDownIcon onClick={handleScroll} icon={faChevronDown} />
          </S.HeroInfoStack>
        </S.HeroInfo>
        <S.VideoOverlay />
        <S.HeroVidePlayer ref={videoRef} playsInline muted loop autoPlay src={hero} />
        <S.AudioPlayerButton onClick={start}>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </S.AudioPlayerButton>
      </S.HeroContainer>
    </S.HeroWrapper>
  );
};

export default HeroVideo;
