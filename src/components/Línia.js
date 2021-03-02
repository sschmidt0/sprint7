import styled from 'styled-components';
import textos from '../assets/textos';

const DivTextos = styled.div`
  padding: 30px 50px;
  color: #fff;
  background-color: darkred;
  border-radius: 0 0 15px 15px;
`;

const Paragraph = styled.p`
  font-family: 'Papyrus', 'Times New Roman';
  font-weight: 800;
  letter-spacing: 1.5px;
`;

const Línia = (props) => {
  let key = -1;

  const line = textos.map(text => {
    key++;
    console.log(key);
    console.log(props.marked);
    return key === props.marked ? <Paragraph style={{ backgroundColor: 'lightblue', color: '#333', padding: '5px', marginLeft: '-5px' }} key={ key }>{ text }</Paragraph> : <Paragraph key={ key }>{ text }</Paragraph>;

  });

  return (
    <DivTextos>
      { line }
    </DivTextos>
  );
}

export default Línia;
