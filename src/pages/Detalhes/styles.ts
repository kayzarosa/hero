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

export const Conteiner = styled.div`
  background: var(--color-background);
  width: 100%;
  height: 100%;

  color: var(--color-title-in-segundary);
`;

export const Conteudo = styled.div`
  background: var(--color-background);
  width: 100%;
`;

export const AnimacaoConteiner = styled.div`
  animation: ${appearFromRight} 1s;
  margin-top: 0px;
  margin: 5%;
  width: 95%;
`;

export const Title = styled.span`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 22px;
  color: var(--color-text-titulo-personagem);
  display: flex;
  align-items: center;
  justify-content: end;

  svg {
    margin-right: 1rem;
    cursor: pointer;
  }

  @media (max-width: 1494px) { 
    width: 100%;
  }
`;

export const CharactersContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const Characters = styled.div`
  display: flex;
  flex-direction: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-personagem-lista);
  border-radius: 8px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  width: 100%;

  div {
    width: 96%;
  }
`;

export const CharactersImageContainer = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1494px) { 
    img {
      width: 50vw;
    }
  }
`;

export const CharactersContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  flex-wrap: wrap;

  div {
    width: 100%;
  }
`;

export const CharactersTitle = styled.div`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 22px;
  color: var(--color-text-titulo-personagem);

  @media (max-width: 1494px) { 
    width: 100%;
  }
`;
export const CharactersDescription = styled.div`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 1.9rem;
  line-height: 16px;
  margin-top: 6px;
  color: var(--color-text-descricao-personagem);

  @media (max-width: 1494px) { 
    width: 100%;
  }
`;

export const SeriesCharactersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  span {
    width: 100%;
    font-size: 1.5rem;
  }

  text-align: center;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 21px;
  margin-top: 8px;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--color-text-series);

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
  }
`;

export const EventsCharactersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  span {
    width: 100%;
    font-size: 1.5rem;
  }

  text-align: center;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 21px;
  margin-top: 8px;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--color-text-series);

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
  }
`;
