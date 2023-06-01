import styled from "styled-components";
export const CatalogContainer = styled.div`
  display: grid;
  min-height: 80vh;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 10px;
  background-color: white;
  padding: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 5fr;
  }
`;
