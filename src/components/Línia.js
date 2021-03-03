import textos from '../assets/textos';
import styled from 'styled-components';


const Div = styled.div`
  width: 400px;
  margin: 70px auto 30px;
  padding: 30px 50px;
  color: #fff;
  background-color: darkred;
  border-radius: 15px;
`;

const Paragraph = styled.p`
  font-family: 'Papyrus', 'Times New Roman';
  font-weight: 800;
  letter-spacing: 1.5px;
`;

const Línia = () => {
  let key = 0;
  const line = textos.map(text => {
    key++;
    return <Paragraph key={ key }>{ text }</Paragraph>;
  });

  return (
    <Div>{ line }</Div>
  );
}

export default Línia;
