import React from 'react';

import { Container } from './styles';

const SideBar: React.FC = () => (
  <Container>
    <div>
      <h2> &#47;&#47; • inscreva-se </h2>
      <p>
        e receba em seu e-mail dicas e informações sobre
        <strong> adaptabilidade </strong>
        e
        <em> soft skills </em>
        que ajudarão a impulsionar de maneira definitiva a sua carreira
      </p>
      <form>
        <input placeholder="Nome" type="text" />
        <input placeholder="E-mail" type="text" />
        <button type="submit">Quero me inscrever</button>
      </form>
    </div>
  </Container>
);

export default SideBar;
