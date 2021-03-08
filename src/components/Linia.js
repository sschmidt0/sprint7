import textos from '../assets/textos';

import { Div } from '../assets/Div';
import { Paragraph } from '../assets/Paragraph';

export const Linia = () => {
  const line = textos.map((text, key) => <p key={ key }>{ text }</p>);

  return (
    <Div>{ line }</Div>
  );
};
