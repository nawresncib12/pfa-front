import { PropsWithChildren, ReactNode, useState } from "react";
import * as S from "./CardStack.styles";
import React from "react";
import { AnimatePresence } from "framer-motion";

type CardStackProps = PropsWithChildren<{}>;

const CardStack = ({ children }: CardStackProps) => {
  const rotationRange = 6;

  const childArray = React.Children.toArray(children) as ReactNode[];
  const [visibleCards, setVisibleCard] = useState(childArray);
  const next = () => {
    const newCards = visibleCards;
    setVisibleCard(newCards.slice(0, -1));
  };

  const generateRandomRotation = () => {
    const randomRotation = Math.random() * rotationRange - rotationRange / 2;
    return randomRotation;
  };
  return (
    <S.CardStackContainer>
      <S.Stack>
        <AnimatePresence>
          {visibleCards.map((card, index) => {
            const isActiveCard = index === visibleCards.length;
            const rotation = generateRandomRotation();
            return (
              <S.Card
                activeIndex={visibleCards.length - 1}
                key={index}
                initial={{ rotate: 0, x: 0 }}
                exit={{ x: rotation < 0 ? "-100%" : "100%" }}
                animate={{ rotate: rotation, x: 0 }}
                transition={{ duration: 0.3 }}
                index={index}
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
