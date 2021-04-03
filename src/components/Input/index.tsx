import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  disabled?: boolean;
  labelInput?: string;
  containerStyle?: {};
  mudarCor?: string;
  className?: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconButtonInicio?: React.ComponentType<IconBaseProps>;
  iconButtonEnd?: React.ComponentType<IconBaseProps>;
  functionButtonInicial?: () => void;
  functionButtonEnd?: () => void;
}

const Input: React.FC<InputProps> = ({
  name,
  disabled,
  labelInput,
  containerStyle,
  mudarCor,
  className,
  icon: Icon,
  iconButtonInicio: IconButtonInicio,
  iconButtonEnd: IconButtonEnd,
  functionButtonInicial,
  functionButtonEnd,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
      mudarCor={!!mudarCor}
      className={className}
      disabledInput={!!disabled}
    >
      { labelInput && <label> {labelInput} </label>}

      { Icon && <Icon size={20} />}

      { IconButtonInicio &&
        <button type="button" onClick={functionButtonInicial}>
          <IconButtonInicio size={20} />
        </button>
      }

      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        disabled={disabled}
        {...rest}
      />

      { IconButtonEnd &&
        <button type="button" onClick={functionButtonEnd}>
          <IconButtonEnd size={20} />
        </button>
      }

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
