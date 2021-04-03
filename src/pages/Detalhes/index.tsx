import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';

import { FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import Token from '../../services/token';
import fotoImg from '../../assets/camera.png';

import {
  Conteiner,
  Conteudo,
  AnimacaoConteiner,
  Title,
  Characters,
  CharactersContainer,
  CharactersContent,
  CharactersDescription,
  CharactersImageContainer,
  SeriesCharactersList,
  EventsCharactersList,
  CharactersTitle
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

const Detalhes: React.FC = () => {
  const history = useHistory();

  const [character, setCharacter] = useState<ICharacters>({} as ICharacters);

  const characterSearch = useCallback(async () => {
    const query = window.location.pathname.split('/');

    const idCharacter = query[2];

    const detailsCharacter = await fetch(`https://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=${Token.timesTamp}&apikey=${Token.keyPublic}&hash=${Token.token}`);

    const responseJson = await detailsCharacter.json();
    setCharacter(responseJson.data.results[0]);
  }, []);

  useEffect(() => {
    characterSearch();
  }, [characterSearch]);

  const back = useCallback(() => {
    history.goBack();
  }, [history]);


  return (
    <Conteiner>
      <>
        <Header />

        <Conteudo>
          <AnimacaoConteiner>

            <Title>
              <FiArrowLeft size={35} onClick={back} />

              Detalhes do personagem
            </Title>

            <CharactersContainer>
              {character.id !== undefined && (
                <Characters>
                  <CharactersImageContainer>
                    <img src={character.thumbnail.path + "." + character.thumbnail.extension || fotoImg} alt="Hero" />
                  </CharactersImageContainer>
                  <CharactersContent>
                    <div>
                      <CharactersTitle>{character.name}</CharactersTitle>
                      <CharactersDescription>{character.description}</CharactersDescription>
                    </div>

                    <div>
                      <SeriesCharactersList>
                        {character.series.items.length > 0 && <div><b>Séries:</b></div>}
                        {character.series.items.length > 0 && character.series.items.map((item, index) => (
                          <div key={`serie${item.name}${index}`}>{item.name}</div>
                        ))}
                      </SeriesCharactersList>
                    </div>

                    <div>
                      <EventsCharactersList>
                        {character.events.items.length > 0 && <div><b>Eventos:</b></div>}
                        {character.events.items.length > 0 && character.events.items.map((item, index) => (
                          <div key={`serie${item.name}${index}`}>{item.name}</div>
                        ))}
                      </EventsCharactersList>
                    </div>
                  </CharactersContent>
                </Characters>
              )}

              {character.id === undefined && (
                <Title>Personagem não encontrado!</Title>
              )}

            </CharactersContainer>

          </AnimacaoConteiner>
        </Conteudo>
        <br />
      </>
    </Conteiner>
  );
}

export default Detalhes;
