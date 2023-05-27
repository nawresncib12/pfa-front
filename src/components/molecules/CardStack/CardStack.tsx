import { PropsWithChildren, ReactNode, useState } from "react";
import * as S from "./CardStack.styles";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Button from "../../atoms/Button/Button";

type CardStackProps = PropsWithChildren<{}>;

const CardStack = ({ children }: CardStackProps) => {
  const ROTATION_RANGE = 5;
  const childArray = React.Children.toArray(children) as ReactNode[];
  const [currentCardIndex, setCurrentCardIndex] = useState(
    childArray.length - 1
  );

  const next = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
    }
  };

  const back = () => {
    if (currentCardIndex <= childArray.length - 1) {
      setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    }
  };

  const generateRandomRotation = () => {
    const randomRotation = Math.random() * ROTATION_RANGE - ROTATION_RANGE / 2;
    return randomRotation;
  };

  return (
    <S.CardStackContainer>
      <S.CardStack>
        <AnimatePresence>
          {childArray.map((card, index) => {
            const isActiveCard = index === currentCardIndex;
            const rotation = generateRandomRotation();
            const shouldRender = index <= currentCardIndex;
            return (
              shouldRender && (
                <S.Card
                  $isActiveCard={isActiveCard}
                  key={index}
                  initial={{ rotate: 0, x: "-50%", y: "-50%" }}
                  exit={{ x: rotation < 0 ? "-150%" : "150%", y: "-50%" }}
                  animate={{ rotate: rotation, x: "-50%", y: "-50%" }}
                  transition={{ duration: 0.3 }}
                >
                  {card}
                </S.Card>
              )
            );
          })}
        </AnimatePresence>
      </S.CardStack>
      <S.Buttons>
        <Button
          variant="secondary"
          onClick={back}
          disabled={currentCardIndex === childArray.length - 1}
        >
          Back
        </Button>
        <Button
          variant="secondary"
          onClick={next}
          disabled={currentCardIndex === 0}
        >
          Next
        </Button>
      </S.Buttons>
    </S.CardStackContainer>
  );
};

export default CardStack;
