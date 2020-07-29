import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

const About = () => (
  <Layout>
    <Bulma.layout.Hero colorStyle='is-primary'>
      <Bulma.elements.Title>/About</Bulma.elements.Title>
    </Bulma.layout.Hero>

    <Bulma.elements.Title subTitle>{ 'huequica.xyz' }</Bulma.elements.Title>
  </Layout>
);

export default About;
