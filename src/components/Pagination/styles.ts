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

  margin-top: 8px; 

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18;
  }

  div.first,
  div.prev,
  div.next,
  div.last {
    border-radius: 50%;
    border-color: var(--color-background-menu);
    border: 2px solid;
    margin-right: 1rem;

    &:hover {
      color: var(--color-button);
    }
  }

  div:not(.numbers),
  div.numbers div{
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    border-color: var(--color-background-menu);
    border: 2px solid;
    margin-right: 1rem;
  }

  div.numbers div:hover,
  div.numbers div.active {
    color: var(--color-button);
  }
`;
