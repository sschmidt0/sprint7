import { useState } from 'react';
import { Linia } from './components/Linia';
import styled from 'styled-components';
import textos from './assets/textos';

const DivContainer = styled.div`
  width: 400px;
  margin: 80px auto 30px;
`;

const Button = styled.button`
  width: 200px;
  padding: 15px;
  background-color: lightblue;
  text-transform: uppercase;
  border: 1px solid #333;
`;


export default () => {
  const [text, setText] = useState(0);

  const lastItem = () => setText(prevText => prevText < 1 ? (prevText = textos.length-1) : prevText - 1);
  const nextItem = () => setText(prevText => prevText > textos.length-2 ? (prevText = 0) : prevText + 1);

  return (
    <DivContainer className="App">
      <div>
        <Button onClick={ () => lastItem() }>Anterior</Button>
        <Button onClick={ () => nextItem() }>Següent</Button>
      </div>
      <Linia marked={text} />
    </DivContainer>
  );
};
