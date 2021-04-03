import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

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

  @media (max-width: 1494px) { 
    width: 100%;
  }
`;

export const CharactersContainer = styled.div`
  margin-top: 2rem;
`;

export const CharactersList = styled.div`
  flex: 1;
  padding: 0 5rem;
  margin-top: 2rem;

  @media (max-width: 1494px) { 
    padding: 2rem;
  }
`;

export const Characters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--background-personagem-lista);
  border-radius: 8px;
  margin-bottom: 1rem;
  max-height: 20rem;
  cursor: pointer;

  @media (max-width: 1494px) { 
    flex-wrap: wrap;
    max-height: 70rem;
  }


  &:hover {
    background: ${shade(0.2, '#fffafa')};
  }
`;

export const CharactersImageContainer = styled.div`
  background: var(--background-imagem-personagem);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 10px;
  width: 15%;
  height: 100%;

  img {
    width: 9vw;
    position: relative;
    height: 17vh;
  }

  @media (max-width: 1494px) { 
    padding: auto;
    width: auto;

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

  div {
    width: 40%;
  }

  @media (max-width: 1494px) { 
    flex-wrap: wrap;

    div {
      width: 100%;
    }
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

  @media (max-width: 1494px) { 
    display: none;
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

  @media (max-width: 1494px) { 
    display: none;
  }
`;

export const PesquisaContainer = styled.div`
  form {
      margin: 1rem 0 2rem 0;
      
      .buscar-personagens {
        width: 90%;
        background: var(--background-personagem-lista);
      }    
  }

  @media (max-width: 900px) { 
    form {
      margin: 0 0 2rem 0;
    }
    margin: auto;
  }
`;
