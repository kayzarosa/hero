import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContainerMenu = styled.nav`
  background: var(--color-background-menu);
  height: 13rem;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;

  img {
    width: 12rem;
    height: 12rem;
    padding: 0;
    margin-left: 15rem;
  }

  .logotipo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10rem;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font: 'Roboto Silab', serif;
    font-size: 1.7rem;
    color: var(--color-text-menu);
  }

  .menu-mobile {
    display: none;
  }

  .menu-mobile-click {
    display: none;
  }

  @media (max-width: 1494px) {
    height: 11rem;
    body {
      background: var(--color-background-second);
    }

    position: relative;
    z-index: 9999;

    img {
      position: absolute;
      width: 10rem;
      height: 10rem;
      margin-left: 1rem;
      padding: 0;
    }

    .menu-mobile {
      content: "";
      animation: ${fade} 0.2s ease-out;
      display: block;
      position: absolute;
      top: calc(25% - 2px);
      right: 2rem;
      color: var(--color-background-second);
      cursor: pointer;
    }

    .menu-mobile-click {
      content: "";
      position: absolute;
      top: calc(25% - 2px);
      right: 2rem;
      color: var(--color-background-second);
      cursor: pointer;
    }

    .logotipo {
      margin-left: 0;
    }
  }

  * {
    box-sizing: border-box;
  }

  *:before, *:after {
    box-sizing: inherit;
  }
`;

export const NomeRestaurante = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 2rem;

  h2 {
    font-style: normal;
    font-weight: 700;
  }

  span {
    margin-left: 1.5rem;
    font-family: 'Poppins-Regular';
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 1494px) { 
    width: 50%;
    position: absolute;
    margin-left: 32%;
    
    h2 {
      font-size: 2rem;
    }

    span {
      font-size: 1.6rem;
    }
  }
`;

export const NomeRestauranteMobile = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 2rem;
  position: absolute;

  h2 {
    font-style: normal;
    font-weight: 700;
  }

  @media (max-width: 1494px) { 
    display: none;
  }
`;