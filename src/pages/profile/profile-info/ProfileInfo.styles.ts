import styled from "styled-components";

export const ProfileTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const ProfileInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ProfileInfoContent = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 16px;
`;
