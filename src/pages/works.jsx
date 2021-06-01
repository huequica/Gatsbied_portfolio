import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

const Intent = ({children, link}) => (
  <a href={ link } target='_blank' rel='noreferrer'>
    { children }
  </a>
);

const Works = () => (
  <Layout>
    <Bulma.layout.Hero colorStyle='is-primary'>
      <Bulma.elements.Title>/worsks</Bulma.elements.Title>
    </Bulma.layout.Hero>

    <Bulma.elements.Title subTitle>
      # ヒカキンシンメトリーbot(新)
    </Bulma.elements.Title>

    <Intent link='https://twitter.com/hikakin_sym'>ヒカキンシンメトリーbot</Intent>の稼働が止まっていたので再実装して公開したbot
    
    <div className='buttons are-medium'>
      <Intent link='https://github.com/HIKAKINSymmetry/nodeBot'>
        <Bulma.elements.Button isRounded color='is-dark'>GitHub</Bulma.elements.Button>
      </Intent>

      <Intent link='https://twitter.com/hikakinsymmetry'>
        <Bulma.elements.Button isRounded color='is-success'>Twitter</Bulma.elements.Button>
      </Intent>
    </div>
  </Layout>
);

export default Works;
