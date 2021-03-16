import textos from '../assets/textos';
import { Paragraph, DivTextos } from './StyledDiv';

export const Linia = ({ marked }) => {
  let key = -1;

  const line = textos.map(text => {
    key++;
    return key === marked ? <Paragraph style={{ backgroundColor: 'lightblue', color: '#333', padding: '5px', marginLeft: '-5px' }} key={ key }>{ text }</Paragraph> : <Paragraph key={ key }>{ text }</Paragraph>;

  });

  return (
    <DivTextos>
      { line }
    </DivTextos>
  );
}
