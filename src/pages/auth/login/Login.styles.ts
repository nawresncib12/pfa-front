import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: {props => props.theme.colors.primary[100]};
`;

export const LoginCard = styled.div`
  max-width: 350px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 24px 32px;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginForm = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
`;

// export const LoginInput = styled.input`
//   width: 100%;
//   height: 40px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 0 10px;
//   margin-bottom: 10px;
// `;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: {props => props.theme.colors.primary[400]};
  &:hover {
    color: {props => props.theme.colors.primary[300]};
    text-decoration: underline;
  }
  font-size: 12px;
  margin-bottom: 10px;
`;

export const NotRegistered = styled.div`
  margin-top: 32px;
  font-size: 16px;
  margin-bottom: 10px;
  color: {props => props.theme.colors.primary[400]};
`;

export const NotRegisteredLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary[400]};
  &:hover {
    color: ${(props) => props.theme.colors.primary[500]};
    text-decoration: underline;
  }
`;
