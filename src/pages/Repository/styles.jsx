import styled from "styled-components";

export const ReposInfo = styled.section`
  margin: 80px 0 87px;
`;

export const ReposInfoHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 61px;

  div {
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

export const ReposInfoNumbers = styled.ul`
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

export const ReposLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 42px 30px 42px 23px;

  text-decoration: none;
  background: var(--white);
  border-radius: 5px;

  transition: transform 0.4s;

  &:hover {
    transform: translateX(10px);
  }

  strong {
    flex: 1;
    text-transform: capitalize;
    font-size: 24px;
    color: var(--black-lgt);
  }

  svg {
    margin-left: auto;
    color: var(--gray-arrow);
  }
`;
