import React from 'react';
import * as Bulma from '@bulma';

// TitleModule alias
const Title = Bulma.elements.Title;

const NamesDescription = () => {
  return (
    <>
      <Title is={ 2 }         ># Name</Title>
      <Title subTitle is={ 4 }>Haru Yakumo</Title>
      <Title is={ 2 }         ># RealName</Title>
      <Title subTitle is={ 4 }>Harumi Ono</Title>
      <Title is={ 2 }         ># Live</Title>
      <Title subTitle is={ 4 }>Toyota, Aichi</Title>
      <Title is={ 2 }         ># Like</Title>
      <Title subTitle is={ 4 }>MusicGame, Web Dev(FrontEnd), DDLC</Title>
    </>
  );
};

export default NamesDescription;
