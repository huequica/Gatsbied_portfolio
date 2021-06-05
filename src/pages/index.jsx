import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

const IndexPage = () => (
  <Layout disableMargin={ true }>
    <Bulma.Layout.Hero colorStyle='is-info' size='is-fullheight'
      subtleGradient={ true }
    >
      <Bulma.Elements.Title>Haru Yakumo's Portfolio Site</Bulma.Elements.Title>
    </Bulma.Layout.Hero>
  </Layout>
);

export default IndexPage;
