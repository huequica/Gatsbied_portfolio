import React from 'react';
import * as Bulma from '@bulma';

const MyName = () => {
  return (
    <>
      <Bulma.elements.Title subTitle>Haru Yakumoについて</Bulma.elements.Title>

      <Bulma.Column Parent>
        <Bulma.Column>
          hoge
        </Bulma.Column>

        <Bulma.Column>
          fuga
        </Bulma.Column>

      </Bulma.Column>
    </>
  );
};

export default MyName;
