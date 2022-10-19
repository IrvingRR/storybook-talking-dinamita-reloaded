import { Container, Options, Legend } from './Dropdown.styles';
import { BiChevronDown } from "react-icons/bi";
import { useState } from 'react';

const Dropdown = ({ children, label = 'Choose an option' }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container onClick={ handleClick }>
      <BiChevronDown/>
      <p> { label } </p>
      <Options isActive={ isActive }>
          {
            children
             ? children
             : <Legend>No options</Legend>
          }
      </Options>
    </Container>
  );
};

export default Dropdown;