import React from 'react';
import * as Bulma from '@bulma';
import Image from '@image';

import Table from './table';

const MyName = () => {
  return (
    <>
      <Bulma.elements.Title subTitle>Haru Yakumoについて</Bulma.elements.Title>

      <Bulma.Column Parent>
        <Bulma.Column size='is-4'>
          <Image filename='dark.png' alt='icon' dimension='128x128'/>
        </Bulma.Column>

        <Bulma.Column>
          <Table />
        </Bulma.Column>

      </Bulma.Column>
    </>
  );
};

export default MyName;
