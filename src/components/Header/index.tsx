import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpeg';

import { ContainerMenu } from './styles';

const Header: React.FC = () => {

  return (
    <ContainerMenu>
      <Link className="logotipo" to="/">
        <img src={logo} alt="Objective" />
      </Link>

      <div>
        <span className="nome">Kayza</span>
        <span>Teste de Front-End</span>
        <span className="cb">CB</span>
      </div>

    </ContainerMenu>
  );
}

export default Header;
