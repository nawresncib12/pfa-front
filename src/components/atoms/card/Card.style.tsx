import styled, { css } from "styled-components";

export const primaryButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
`;

export const Card = styled.div`
  border: 0px solid #ddd;
  border-radius: 22px;
  width: 40px;
  height: 300px;
  text-align: center;
  width: 250px;
  margin: 50px 20px;
  background-color: #f6f6f6;
`;

const getRandomColor=()=>{
    const colors=[  "lightPink",
    "darkPink",
    "lightPurple",
    "lightBlue",
    "darkBlue",
    "lightYellow",
    "darkYellow",
    "lightOrange",
    "darkOrange"]
    return colors[Math.floor(Math.random() * colors.length)]
}

export const Card_img = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 100%;
  margin: -60px auto 0;
  box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.colors.pastels[getRandomColor()]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Card_info = styled.div`
  display: "flex";
  align-items: "center";
`;

export const Heart = styled.div`
  height: 15px;
  width: 15px;
  padding-right: 5px;
  color: #f984b5;
`;

export const Likes = styled.span`
  display: inline-flex;
  width: fit-content;
  background-color: white;
  padding: 5px;
  border-radius: 6px;
  color: #f984b5;
  font-size: 12px;
`;

export const Separator = styled.hr`
  border-top: 2px solid white;
  border-radius: 5px;
  background-color: white;
  width: 70%;
`;

export const ReceiptInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 10px);
  margin-bottom: 20px;
  h5 {
    margin: 0;
  }
  h6 {
    color: lightgray;
    margin: 10px;
  }
`;
