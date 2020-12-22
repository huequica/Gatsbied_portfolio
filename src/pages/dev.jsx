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

    
    <Title is={ 2 }         ># FrontEnd</Title>
    <Title subTitle is={ 4 }>+ React(use Hooks)</Title>
    <Title subTitle is={ 4 }>+ JavaScript(EcmaScrit2018)</Title>
    <Title subTitle is={ 4 }>+ HTML, CSS</Title>

    <Title is={ 2 }         ># BackEnd(Just a little)</Title>
    <Title subTitle is={ 4 }>+ PHP(Laravel5, NoFramework)</Title>
    <Title subTitle is={ 4 }>+ Ruby(I like this lang😆)</Title>

    <Title is={ 2 }         ># Mobile Application</Title>
    <Title subTitle is={ 4 }>+ Kotlin(Android App)</Title>

  </Layout>

);

export default Dev;
