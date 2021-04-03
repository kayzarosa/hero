import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  mudarCor: boolean;
  disabledInput: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-background-input);
  
  border-radius: 1rem;
  padding: 1.6rem;
  width: 100%;

  border: 0.2rem solid var(--color-background-input);
  color: var(--color-text-input);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-image-input);
    `}

  ${(props) =>
    props.mudarCor &&
    css`
      background: var(--color-background-segundary);
    `}

  ${(props) =>
    props.disabledInput &&
    css`
      background: var(--color-input-disabled);
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-boder-input-error);
    `}


  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-image-input);
      border-color: var(--color-border-focus-input);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-placeholder-input);
    width: 80%;

    &::placeholder {
      color: var(--color-text-input);      
    }

    ${(props) =>
      props.mudarCor &&
      css`
          color: var(--color-placeholder-input-segundary);

          &::placeholder {
            color: var(--color-text-input-segundary);      
          }
      `}
  }

  svg {
    margin-right: 1.6rem;
  }

  label {
    position: absolute;
    margin-top: -5.4rem;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 1rem;
    color: var(--color-placeholder-input);
    background: var(--color-background-second);

    ${(props) =>
      props.mudarCor &&
      css`
          color: var(--color-placeholder-input-segundary);
      `}

    ${(props) =>
      props.disabledInput &&
      css`
        background: var(--color-label-disabled);
      `}
  }

  button {
    background: transparent;
    border: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-boder-input-error);
    color: var(--color-span);

    &::before {
      border-color: var(--color-boder-input-error) transparent;
    }
  }
`;
