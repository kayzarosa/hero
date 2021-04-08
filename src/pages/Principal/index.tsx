import React, { useCallback, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header';
import fotoImg from '../../assets/camera.png';

import { FiSearch } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import Token from '../../services/token';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Pagination from '../../components/Pagination';

import {
  Conteiner,
  Conteudo,
  AnimacaoConteiner,
  Title,
  SubTitle,
  CharactersContainer,
  SeriesCharactersList,
  EventsCharactersList,
  CharactersTitle,
  PesquisaContainer,
} from './styles';

interface ISeriesItems {
  resourceURI: string;
  name: string;
}

interface ISeries {
  available: number;
  collectionURI: string;
  items: ISeriesItems[];
  returned: number;
}

interface IThumbanail {
  path: string;
  extension: string;
}

interface IEventesItem {
  resourceURI: string;
  name: string;
}

interface IEventes {
  available: number;
  collectionURI: string;
  items: IEventesItem[];
  returned: number;
}

interface ICharacters {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: IThumbanail;
  series: ISeries;
  events: IEventes;
}

const Principal: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [total, setTotal] = useState(0);
  const [valueSearch, setValueSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [totalButtonsVisible, setTotalButtonsVisible] = useState(5);

  const charactersSearch = useCallback(async () => {
    const listCharacters = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${Token.timesTamp}&orderBy=name&limit=10&apikey=${Token.keyPublic}&hash=${Token.token}`);

    const responseJson = await listCharacters.json();

    setTotal(responseJson.data.total);
    setCharacters(responseJson.data.results);
    setOffset(0);
  }, []);

  useEffect(() => {
    charactersSearch();
  }, [charactersSearch]);

  useEffect(() => {
    const telaTamanho = window.innerWidth;

    if (telaTamanho <= 835) {
      setTotalButtonsVisible(3);
      return;
    }

    setTotalButtonsVisible(5);

  }, []);

  const serchCharactersPaginete = useCallback(async (offset: number) => {
    const search = valueSearch ? `&nameStartsWith=${valueSearch}` : "";

    const listCharacters = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${Token.timesTamp}&orderBy=name&limit=10${search}&offset=${offset}&apikey=${Token.keyPublic}&hash=${Token.token}`);

    const responseJson = await listCharacters.json();

    setTotal(responseJson.data.total);
    setCharacters(responseJson.data.results);
    setOffset(offset);
  }, [valueSearch]);

  const search = useCallback(async () => {
    if (!valueSearch) {
      return;
    }

    const listCharacters = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${Token.timesTamp}&orderBy=name&limit=10&nameStartsWith=${valueSearch}&apikey=${Token.keyPublic}&hash=${Token.token}`);

    const responseJson = await listCharacters.json();

    setTotal(responseJson.data.total);
    setCharacters(responseJson.data.results);
    setOffset(0);
  }, [valueSearch]);

  const searchCharacters = useCallback(async (e) => {
    const filtro = e.target.value;

    if (!filtro) {
      charactersSearch();
      setValueSearch("");
      return;
    }

    setValueSearch(filtro);
    search();
  }, [charactersSearch, search]);

  const details = useCallback((idCharacter: number) => {
    history.push(`/detalhes/${idCharacter}`);
  }, [history]);

  return (
    <Conteiner>
      <>
        <Header />

        <Conteudo>
          <AnimacaoConteiner>
            <PesquisaContainer>
              <Title>Busca de personagens</Title>
              <SubTitle>Nome do personagem</SubTitle>
              <Form ref={formRef} onSubmit={() => { }}>
                <Input
                  className="buscar-personagens"
                  name="buscar_personagens"
                  placeholder="Search"
                  mudarCor="1"
                  onKeyUp={(e) => { searchCharacters(e) }}
                  functionButtonEnd={search}
                  iconButtonEnd={FiSearch}
                />
              </Form>
            </PesquisaContainer>

            <CharactersContainer>
              {characters.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        Personagem
                      </th>
                      <th className="ocultar">
                        Séries
                      </th>
                      <th className="ocultar">
                        Eventos
                      </th>
                    </tr>
                  </thead>
                  {characters && characters.map((character) => (
                    <tr key={character.id} className="conteudo" onClick={() => details(character.id)} >
                      <td className="img">
                        <img src={character.thumbnail.path + "." + character.thumbnail.extension || fotoImg} alt="Hero" />
                      </td>
                      <td>
                        <CharactersTitle>{character.name}</CharactersTitle>
                      </td>
                      <td className="ocultar series">
                        <SeriesCharactersList>
                          {character.series.items.length > 0 && character.series.items.map((item, index) => (
                            (index < 3 &&
                              <div key={`serie${item.name}`}>{item.name}</div>
                            )
                          ))}
                        </SeriesCharactersList>
                      </td>
                      <td className="ocultar events">
                        <EventsCharactersList>
                          {character.events.items.length > 0 && character.events.items.map((item, index) => (
                            (index < 3 &&
                              <div key={`serie${item.name}`}>{item.name}</div>
                            )
                          ))}
                        </EventsCharactersList>
                      </td>
                    </tr>
                  ))}
                </table>
              )}

              {characters.length === 0 && (
                <Title>Não foi encontrado nenhum personagem!</Title>
              )}
            </CharactersContainer>

            <Pagination
              limit={10}
              total={total}
              offset={offset}
              totalButtonsVisible={totalButtonsVisible}
              serchCharactersPaginete={serchCharactersPaginete}
              className="pagination" />
          </AnimacaoConteiner>
        </Conteudo>
        <br />
      </>
    </Conteiner>
  );
}

export default Principal;
