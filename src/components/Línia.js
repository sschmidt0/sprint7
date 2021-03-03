import textos from '../assets/textos';

const Línia = () => {
  let key = 0;
  const line = textos.map(text => {
    key++;
    return <p key={ key }>{ text }</p>;
  });

  return (
    <div>{ line }</div>
  );
}

export default Línia;

