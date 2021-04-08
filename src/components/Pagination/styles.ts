import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PaginationView = styled.div`
  animation: ${appearFromRight} 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 8px; 

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background-pagination);

    font-family: "PT Sans", sans-serif;
    font-size: 2rem;
  }

  div.first,
  div.prev,
  div.next,
  div.last {
    border-radius: 5px;
    border-color: var(--color-border);
    border: 1px solid var(--color-border);
    margin-right: 1rem;

    &:hover {
      color: var(--color-button);
    }

    svg {
      color: #8E8E8E;
    }
  }

  div:not(.numbers),
  div.numbers div{
    width: 4rem;
    height: 4rem;

    border-radius: 5px;
    border-color: var(--color-border);
    border: 1px solid var(--color-border);
    margin-right: 1rem;
    color: #555555;
  }

  div.numbers div:hover,
  div.numbers div.active {
    color: var(--color-button-active);
    background: var(--background-active);
  }
`;
