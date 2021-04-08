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
  overflow-x: hidden;
`;

export const AnimacaoConteiner = styled.div`
  animation: ${appearFromRight} 1s;
  margin-top: 0px;
  width: 100%;

  .pagination {
    background: var(--color-background-menu);
    width: 100%;
    height: 15rem;
    margin-top: 6rem;
  }
`;

export const Title = styled.span`
  width: 100%;
  font-family: 'PT Sans Caption', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6rem;
  line-height: 22px;
  color: var(--color-text-titulo-personagem);
  margin-bottom: 5rem;

  @media (max-width: 1494px) { 
    width: 100%;
    font-size: 4rem;
  }
`;

export const SubTitle = styled.span`
  width: 100%;
  font-family: 'PT Sans Caption', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  line-height: 22px;
  color: var(--color-text-titulo-personagem);
  margin-bottom: 3rem;

  @media (max-width: 1494px) { 
    width: 100%;
    font-size: 2rem;
  }
`;

export const CharactersContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0;

  width: 100%;

  table {
    width: 90%;

    @media (max-width: 900px) {
      .ocultar {
        display: none;
      }
    }
  }

  table, tr, td {
    border: 0px;
    border-collapse: 0px;
  }

  table > thead {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: "PT Sans", serif;
    width: 33.33%;
    color: var(--color-text-header);
    border: 1px solid var(--color-background-menu);
  }

  .conteudo {
    height: 10rem;
    background: var(--color-background-menu);
    
    height: 8.8rem;
    cursor: pointer;

    td {
      border: 1px solid var(--color-background-menu);
    }

    img {
      width: 48px;
      height: 48px;
    }

    .img {
      text-align: center;
      width: 8.5rem;
      height: 8.5rem;
    }

    .events, .series {
      width: 33.33%;
    }
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

export const CharactersTitle = styled.div`
  font-family: 'PT Sans', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.0rem;
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
  font-family: 'PT Sans', serif;
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
  font-family: 'PT Sans', serif;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  width: 100%;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 2%;

  form {
      margin: 1rem 0 2rem 0;
      width: 100%;
      
      .buscar-personagens {
        width: 50rem;
        
        background: var(--background-personagem-lista);
      }    
  }

  @media (max-width: 900px) { 
    form {
      margin: 0 0 2rem 0;
      
      .buscar-personagens {
        width: 80%;
        margin-left: 2rem;
      }
    }
  }
`;
