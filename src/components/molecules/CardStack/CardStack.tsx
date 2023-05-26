import { PropsWithChildren, ReactNode, useState } from "react";
import * as S from "./CardStack.styles";
import React from "react";
import { AnimatePresence } from "framer-motion";

type CardStackProps = PropsWithChildren<{}>;

const CardStack = ({ children }: CardStackProps) => {
  const ROTATION_RANGE = 6;
  const childArray = React.Children.toArray(children) as ReactNode[];
  const [visibleCards, setVisibleCard] = useState(childArray);
  const next = () => {
    const newCards = visibleCards;
    setVisibleCard(newCards.slice(0, -1));
  };

  const generateRandomRotation = () => {
    const randomRotation = Math.random() * ROTATION_RANGE - ROTATION_RANGE / 2;
    return randomRotation;
  };
  return (
    <S.CardStackContainer>
      <S.Stack>
        <AnimatePresence>
          {visibleCards.map((card, index) => {
            const isActiveCard = index === visibleCards.length - 1;
            const rotation = generateRandomRotation();
            return (
              <S.Card
                $isActiveCard={isActiveCard}
                key={index}
                initial={{ rotate: 0, x: 0 }}
                exit={{ x: rotation < 0 ? "-100%" : "100%" }}
                animate={{ rotate: rotation, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={next}
              >
                {card}
              </S.Card>
            );
          })}
        </AnimatePresence>
      </S.Stack>
    </S.CardStackContainer>
  );
};

export default CardStack;
