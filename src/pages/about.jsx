import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

import MyName from './aboutItems/myname';


const About = () => (
  <Layout>
    <Bulma.layout.Hero colorStyle='is-primary'>
      <Bulma.elements.Title>/About</Bulma.elements.Title>
    </Bulma.layout.Hero>

    <Bulma.elements.Title subTitle>{ 'huequica.xyzについて' }</Bulma.elements.Title>

    Haru Yakumoが個人で運営しているポートフォリオみたいなサイトです。<br />
    GatsbyJSによって記述されています。

    <MyName />
  </Layout>
);

export default About;
