import React from 'react';
import * as Bulma from '@bulma';
import Image from '@image';

const MyName = () => {
  return (
    <>
      <Bulma.elements.Title subTitle>Haru Yakumoについて</Bulma.elements.Title>

      <Bulma.Column Parent>
        <Bulma.Column>
          <Image filename='dark.png' alt='icon'/>
        </Bulma.Column>

        <Bulma.Column>
          fuga
        </Bulma.Column>

      </Bulma.Column>
    </>
  );
};

export default MyName;
