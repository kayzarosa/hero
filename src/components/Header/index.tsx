import React from 'react';
import { Link } from 'react-router-dom';

import { FcBiotech } from "react-icons/fc";

import { ContainerMenu, NomeRestaurante, NomeRestauranteMobile } from './styles';

const Header: React.FC = () => {

  return (
    <ContainerMenu>
      <Link className="logotipo" to="/">
        <FcBiotech size={50} />
        <NomeRestaurante>
          <h2>Hero</h2>
        </NomeRestaurante>
      </Link>

      <NomeRestauranteMobile>
        <h2>Hero</h2>
      </NomeRestauranteMobile>

    </ContainerMenu>
  );
}

export default Header;
