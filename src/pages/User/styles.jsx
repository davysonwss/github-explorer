import styled from "styled-components";

export const UserInfo = styled.section`
  margin: 80px 0 87px;
`;

export const UserInfoHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 32px;

    strong {
      font-size: 36px;
      color: var(--black-lgt);
    }

    p {
      margin-top: 12px;
      font-size: 20px;
      color: var(--gray-med-2);
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const UserInfoNumbers = styled.ul`
  display: flex;
  list-style: none;

  li {
    & + li {
      margin-left: 80px;
    }

    strong {
      display: block;
      font-size: 36px;
      color: var(--black-lgt);
    }

    span {
      display: block;
      margin-top: 4px;
      font-size: 20px;
      color: var(--gray-stg);
    }
  }
`;

export const RepositoriesContainer = styled.section`
  width: 100%;

  h1 {
    margin-bottom: 40px;
    font-size: 36px;
    color: var(--black-lgt);
  }
`;

export const RepositoryItem = styled.div`
  & + div {
    margin-top: 16px;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 28px 30px 28px 24px;

    text-decoration: none;
    background: var(--white);
    border-radius: 5px;

    transition: transform 0.4s;

    &:hover {
      transform: translateX(10px);
    }

    &:not(:first-child) {
      margin-top: 16px;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: var(--black-lgt);
      }

      p {
        margin-top: 4px;
        font-size: 16px;
        color: var(--gray-med);
      }
    }

    svg {
      margin-left: auto;
      color: var(--gray-arrow);
    }
  }
`;
