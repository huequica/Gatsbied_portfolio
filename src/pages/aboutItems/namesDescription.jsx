import React from 'react';
import * as Bulma from '@bulma';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// TitleModule alias
const Title = Bulma.Elements.Title;

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
      <Title subTitle is={ 4 }>
        MusicGame,
        <AniLink fade duration={ 0.5 } to='/dev'>
          Web Dev(FrontEnd)
        </AniLink>,
        DDLC
      </Title>
    </>
  );
};

export default NamesDescription;
