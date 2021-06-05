import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';

// TitleModule alias
const Title = Bulma.Elements.Title;

const FrontEnd = () => (
  <>
    <Title is={ 2 }         ># FrontEnd</Title>
    <Title subTitle is={ 4 }>+ React(use Hooks)</Title>
    <Title subTitle is={ 4 }>+ JavaScript(EcmaScrit2018)</Title>
    <Title subTitle is={ 4 }>+ HTML, CSS</Title>
  </>
);

const BackEnd = () => (
  <>
    <Title is={ 2 }         ># BackEnd(Just a little)</Title>
    <Title subTitle is={ 4 }>+ PHP(Laravel5, NoFramework)</Title>
    <Title subTitle is={ 4 }>+ Ruby(I like this lang😆)</Title>
  </>
);

const Mobile = () => (
  <>
    <Title is={ 2 }         ># Mobile Application</Title>
    <Title subTitle is={ 4 }>+ Kotlin(Android App)</Title>
  </>
);

const Descriptions = () => (
  <Bulma.Column Parent>

    <Bulma.Column>
      <FrontEnd />
    </Bulma.Column>

    <Bulma.Column>
      <BackEnd />
    </Bulma.Column>

    <Bulma.Column>
      <Mobile />
    </Bulma.Column>

  </Bulma.Column>
);


const Dev = () => (
  <Layout>
    <Bulma.Layout.Hero colorStyle='is-primary'>
      <Title>/dev</Title>
    </Bulma.Layout.Hero>

    <Descriptions />
  </Layout>

);

export default Dev;
