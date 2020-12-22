import React from 'react';
import * as Bulma from '@bulma';
import Image from '@image';

import NamesDescription from './namesDescription';

const MyName = () => {
  return (
    <>
      <Bulma.elements.Title subTitle>Haru Yakumoについて</Bulma.elements.Title>

      <Bulma.Column Parent>
        <Bulma.Column size='is-4'>
          <Image filename='dark.png' alt='icon'/>
        </Bulma.Column>

        <Bulma.Column>
          <NamesDescription />
        </Bulma.Column>

      </Bulma.Column>
    </>
  );
};

export default MyName;
