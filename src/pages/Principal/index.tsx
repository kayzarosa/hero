import React, { useCallback, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header';
import fotoImg from '../../assets/camera.png';

import { FiList } from 'react-icons/fi';

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
  Characters,
  CharactersList,
  CharactersContainer,
  CharactersContent,
  CharactersImageContainer,
  SeriesCharactersList,
  EventsCharactersList,
  CharactersTitle,
  PesquisaContainer
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

  const searchCharacters = useCallback(async (e) => {
    const filtro = e.target.value;

    if (!filtro) {
      charactersSearch();
      setValueSearch("");
      return;
    }

    setValueSearch(filtro);

    const listCharacters = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${Token.timesTamp}&orderBy=name&limit=10&nameStartsWith=${filtro}&apikey=${Token.keyPublic}&hash=${Token.token}`);

    const responseJson = await listCharacters.json();

    setTotal(responseJson.data.total);
    setCharacters(responseJson.data.results);
    setOffset(0);
  }, [charactersSearch]);

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
              <Form ref={formRef} onSubmit={() => { }}>
                <Input
                  className="buscar-personagens"
                  name="buscar_personagens"
                  placeholder="Nome do Personagem"
                  icon={FiList}
                  mudarCor="1"
                  onKeyUp={(e) => { searchCharacters(e) }}
                />
              </Form>
            </PesquisaContainer>

            <CharactersContainer>
              <CharactersList>
                {characters.length > 0 && characters.map(character => (
                  <Characters
                    key={character.id}
                    onClick={() => { details(character.id) }}
                  >
                    <CharactersImageContainer>
                      <img src={character.thumbnail.path + "." + character.thumbnail.extension || fotoImg} alt="Hero" />
                    </CharactersImageContainer>
                    <CharactersContent>
                      <div>
                        <CharactersTitle>{character.name}</CharactersTitle>
                      </div>

                      <div>
                        <SeriesCharactersList>
                          {character.series.items.length > 0 && <div><b>Séries:</b></div>}
                          {character.series.items.length > 0 && character.series.items.map((item, index) => (
                            (index < 3 &&
                              <div key={`serie${item.name}`}>{item.name}</div>
                            )
                          ))}
                        </SeriesCharactersList>
                      </div>

                      <div>
                        <EventsCharactersList>
                          {character.events.items.length > 0 && <div><b>Eventos:</b></div>}
                          {character.events.items.length > 0 && character.events.items.map((item, index) => (
                            (index < 3 &&
                              <div key={`serie${item.name}`}>{item.name}</div>
                            )
                          ))}
                        </EventsCharactersList>
                      </div>
                    </CharactersContent>
                  </Characters>
                ))}

                {characters.length === 0 && (
                  <Title>Não foi encontrado nenhum personagem!</Title>
                )}

              </CharactersList>
            </CharactersContainer>

            <Pagination
              limit={10}
              total={total}
              offset={offset}
              totalButtonsVisible={totalButtonsVisible}
              serchCharactersPaginete={serchCharactersPaginete} />
          </AnimacaoConteiner>
        </Conteudo>
        <br />
      </>
    </Conteiner>
  );
}

export default Principal;
