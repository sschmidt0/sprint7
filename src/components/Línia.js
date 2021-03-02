import styled from 'styled-components';

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
  return (
    <DivTextos>
      <Paragraph>{ props.text }</Paragraph>
    </DivTextos>
  );
}

export default Línia;
