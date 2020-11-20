/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
import React from 'react';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import ContentBox from '../../components/ContentBox';

import Img1 from '../../assets/image-1.jpg';
import Img2 from '../../assets/image-2.png';
import Img3 from '../../assets/image-3.jpg';

import BoxConceito from '!babel-loader!mdx-loader!../../markdowns/boxConceito.md';
import BoxEvolucao from '!babel-loader!mdx-loader!../../markdowns/boxEvolucao.md';
import BoxMundoCorporativo from '!babel-loader!mdx-loader!../../markdowns/boxMundoCorporativo.md';
import BoxComoDesenvolver from '!babel-loader!mdx-loader!../../markdowns/boxComoDesenvolver.md';
import BoxLinks1 from '!babel-loader!mdx-loader!../../markdowns/boxLinks1.md';
import BoxLinks2 from '!babel-loader!mdx-loader!../../markdowns/boxLinks2.md';

const LandingPage: React.FC = () => (
  <>
    <Header title="adaptabilidade  • //" subtitle="s.f.">
      <div>
        <strong>1. </strong>
        <span>propriedade ou qualidade do que é adaptável;</span>
      </div>
      <div>
        <strong>2. </strong>
        <span>capacidade de alguém ou algo de mostrar-se adaptável.</span>
      </div>
    </Header>

    <ContentBox type="left-content" title="// •  conceito" imageSource={Img1}>
      <BoxConceito />
    </ContentBox>

    <ContentBox
      type="right-content"
      title="// •  saiba mais"
      videoSource="https://www.youtube.com/embed/f6icaf_2HUw"
      videoTitle="Adaptabilidade: o novo ciclo da Casa Firjan"
    >
      <BoxLinks1 />
    </ContentBox>

    <Header
      title='"inteligência é a capacidade de se adaptar à mudança"'
      subtitle="Stephen Hawking"
    />

    <ContentBox type="right-content" title="evolução  • //" imageSource={Img2}>
      <BoxEvolucao />
    </ContentBox>

    <ContentBox
      type="right-content"
      title="como desenvolver a adaptabilidade  • //"
      imageSource={Img1}
    >
      <BoxComoDesenvolver />
    </ContentBox>

    <Header
      title='"o tempo é mudança, transformação, evolução"'
      subtitle="Issac L. Peretz"
    />

    <ContentBox title="// •  mundo corporativo" imageSource={Img3}>
      <BoxMundoCorporativo />
    </ContentBox>

    <ContentBox
      type="left-content"
      title="// •  saiba mais"
      videoSource="https://www.youtube.com/embed/xJM_CQN8-ns"
      videoTitle="3 ways to measure your adaptability -- and how to improve it | Natalie Fratto"
    >
      <BoxLinks2 />
    </ContentBox>

    <SideBar />
  </>
);

export default LandingPage;
