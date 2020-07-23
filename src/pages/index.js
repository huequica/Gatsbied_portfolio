import React from 'react';
import Layout from '../components/layout';
import * as Bulma from '../bulmaElements/index';

const IndexPage = () => (
  <Layout>
    <Bulma.layout.Hero colorStyle='is-info' size='is-fullheight' subtleGradient={ true }>
      <Bulma.elements.Title>Haru Yakumo's Portfolio Site</Bulma.elements.Title>
    </Bulma.layout.Hero>
  </Layout>
);

export default IndexPage;
