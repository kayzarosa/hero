import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  loading: number;
}

export const Container = styled.button<ButtonProps>`
  background: var(--color-button);
  height: 5.6rem;
  border-radius: 1rem;
  border: 0;
  padding: 0 1.6rem;
  color: var(--color-button-text);
  width: 100%;
  font-weight: 500;
  margin-top: 1.6rem;
  transition: background-color 0.2s;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
    `}
`;
