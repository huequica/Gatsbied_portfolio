import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

// TitleModule alias
const Title = Bulma.elements.Title;

const Dev = () => (
  <Layout>
    <Bulma.layout.Hero colorStyle='is-primary'>
      <Title>/dev</Title>
    </Bulma.layout.Hero>

  </Layout>

);

export default Dev;
