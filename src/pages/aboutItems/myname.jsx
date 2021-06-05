import React from 'react';
import * as Bulma from '@bulma';
import { StaticImage } from "gatsby-plugin-image";


import NamesDescription from './namesDescription';

const MyName = () => {
  return (
    <>
      <Bulma.Elements.Title subTitle>Haru Yakumoについて</Bulma.Elements.Title>

      <Bulma.Column Parent>
        <Bulma.Column size='is-4'>
          <figure className='image'>
            <StaticImage imgClassName='is-rounded' src='../../images/dark.png' alt='icon' />
          </figure>
        </Bulma.Column>

        <Bulma.Column>
          <NamesDescription />
        </Bulma.Column>

      </Bulma.Column>
    </>
  );
};

export default MyName;
