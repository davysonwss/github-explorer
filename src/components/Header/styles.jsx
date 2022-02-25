import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Img = styled.img``;

export const BtnBack = styled.button`
  display: flex;
  align-items: center;
  font-weight: 700;
  background: none;
  border: none;
  color: var(--gray-med);

  transition: color 0.4s;

  &:hover {
    color: #666;
  }
`;
