import textos from '../assets/textos';

const Línia = () => {
  const line = textos.map(text => {
    return <p>{ text }</p>;
  });

  return (
    <div>{ line }</div>
  );
}

export default Línia;
