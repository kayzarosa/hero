import styled from 'styled-components';

export const ContainerMenu = styled.div`
  background: var(--color-background-menu);
  height: 6.4rem;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;

  img {
    width: 9.6rem;
    height: 2.4rem;
    padding: 0;
    margin-left: 2.4rem;
  }

  .logotipo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
  }

  @media (max-width: 1494px) {
    height: 11rem;

    position: relative;
    z-index: 9999;

    img {
      position: absolute;
      width: 9.6rem;
      height: 2.4rem;
      margin-left: 1rem;
      padding: 0;
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

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin-right: 2rem;
    position: absolute;

    span {
      font-style: normal;
      font-family: "PT Sans Caption", sans-serif;
      font-size: 2rem;
      margin-right: 1rem;
    }

    span.cb {
      display: flex;
      align-items: center;
      margin-right: 2rem;
      border-radius: 1rem;
      font-weight: 600;
      width: 3.2rem;
      height: 3.2rem;
      background: #F5F5F5 0% 0% no-repeat padding-box;
      color: #555555;
      opacity: 1;
    }

    span.nome {
      font-weight: 600;
    }

    @media (max-width: 1494px) { 
      span {
        font-size: 1.4rem;
      }

    }
  }
`;
