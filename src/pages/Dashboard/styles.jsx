import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  margin: 100px 0 120px;
`;

export const Title = styled.h1`
  max-width: 360px;
  margin-bottom: 40px;

  font-size: 48px;
  line-height: 56px;

  color: var(--black-med);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 714px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 29px;

    font-size: 20px;

    outline: 0;
    border: 2px solid var(--white);
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: var(--black-lgt);

    ${(props) =>
      props.hasError &&
      css`
        border-color: var(--red-error);
      `}

    &::placeholder {
      color: var(--gray-med);
    }
  }

  button[type="submit"] {
    display: flex;
    align-items: center;

    height: 70px;
    padding: 0 64px;

    font-size: 18px;
    font-weight: 700;

    color: var(--white);
    border: none;
    border-radius: 0 5px 5px 0;
    background: var(--green);
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, "#04D361")};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: var(--red-error);
  margin-top: 8px;
`;

export const Users = styled.div`
  max-width: 715px;
  margin: 0 0 100px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 30px 16px 16px;

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

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
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
