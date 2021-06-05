import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

import MyName from './aboutItems/myname';


const About = () => (
  <Layout>
    <Bulma.Layout.Hero colorStyle='is-primary'>
      <Bulma.Elements.Title>/about</Bulma.Elements.Title>
    </Bulma.Layout.Hero>

    <Bulma.Elements.Title subTitle>{ 'huequica.xyzについて' }</Bulma.Elements.Title>

    Haru Yakumoが個人で運営しているポートフォリオみたいなサイトです。<br />
    GatsbyJS と Bulma によって構築されています。

    <MyName />
  </Layout>
);

export default About;
