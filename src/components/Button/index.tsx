import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: number;
  className?: string;
  textoLoading?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  children,
  loading,
  className,
  textoLoading,
  ...rest }) => {
  return (
    <Container 
      type="button" 
      loading={Number(!!loading)}
      className={className}
      {...rest}
    >
      {loading ? textoLoading ? textoLoading : 'Carregando...' : children}
    </Container>
  );
};

export default Button;
