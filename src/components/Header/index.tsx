import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

// eslint-disable-next-line react/prop-types
const Header: React.FC<HeaderProps> = ({ children, title, subtitle }) => (
  <Container>
    <h1>{title}</h1>
    <div>
      <em>{subtitle}</em>
    </div>
    {children}
  </Container>
);

export default Header;
