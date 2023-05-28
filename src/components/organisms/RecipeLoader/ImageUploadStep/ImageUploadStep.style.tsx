import styled from "styled-components";

export const ImageUploadStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
`;

export const UploadedImage = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 16px;
  max-height: 70%;
  width: auto;
  max-width: 80%;
  object-fit: cover;
`;
