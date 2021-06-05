import React from 'react';
import Layout from '@layout';
import * as Bulma from '@bulma';
import Image from '@image';

const Intent = ({children, link}) => (
  <a href={ link } target='_blank' rel='noreferrer'>
    { children }
  </a>
);

const Box = ({children}) => <div className='box'>{ children }</div>;

const Works = () => (
  <Layout>
    <Bulma.Layout.Hero colorStyle='is-primary'>
      <Bulma.Elements.Title>/worsks</Bulma.Elements.Title>
    </Bulma.Layout.Hero>
    
    <Bulma.Elements.Title># 個人の制作物</Bulma.Elements.Title>

    <Box> { /* @HikakinSymmetry */ }
      <Bulma.Column Parent>
        <Bulma.Column size='is-3'>
          <Image filename='hikakinsymmetry.png' alt='@hikakinSymmetry'/>
        </Bulma.Column>

        <Bulma.Column>
          <Bulma.Elements.Title subTitle>
            # ヒカキンシンメトリーbot(新)
          </Bulma.Elements.Title>

          <p className='mb-3'>
            <Intent link='https://twitter.com/hikakin_sym'>ヒカキンシンメトリーbot</Intent>の稼働が止まっていたので再実装して公開したbot<br />
            百聞は一見に如かずなので一回Twitterを見てほしい
          </p>

          <div className='buttons are-medium'>
            <Intent link='https://github.com/HIKAKINSymmetry/nodeBot'>
              <Bulma.Elements.Button isRounded color='is-dark'>GitHub</Bulma.Elements.Button>
            </Intent>

            <Intent link='https://twitter.com/hikakinsymmetry'>
              <Bulma.Elements.Button isRounded color='is-info'>Twitter</Bulma.Elements.Button>
            </Intent>
          </div>

        </Bulma.Column>

      </Bulma.Column>
    </Box>

    <Box> { /* soundrop_otogibaraEra */ }
      <Bulma.Column Parent>
        <Bulma.Column size='is-3'>
          <Image filename='sdp_oe.png' alt='@hikakinSymmetry'/>
        </Bulma.Column>

        <Bulma.Column>
          <Bulma.Elements.Title subTitle>
            soundrop_OtogibaraEra
          </Bulma.Elements.Title>

          <p className='mb-3'>
            にじさんじに所属(していた)御伽原江良の声を出すだけのおもちゃ<br />
            Reactを知るために作ったが、ロゴも自分で作ってたりする<br />
            かつてはCircle CIでEC2に自動デプロイまでしていた(今はインスタンスごと消した)
          </p>

          <div className='buttons are-medium'>
            <Intent link='https://github.com/huequica/soundrop_OtogibaraEra'>
              <Bulma.Elements.Button isRounded color='is-dark'>GitHub</Bulma.Elements.Button>
            </Intent>

            <Intent link='https://suspicious-curran-504da5.netlify.app/'>
              <Bulma.Elements.Button isRounded color='is-success'>Sample</Bulma.Elements.Button>
            </Intent>
          </div>

        </Bulma.Column>

      </Bulma.Column>
    </Box>

    <Bulma.Elements.Title># OSS Contribution</Bulma.Elements.Title>

    <Box> { /* @Types/twit */ }
      <Bulma.Column Parent>
        
        <Bulma.Column size='is-3' /> { /* Empty column */ }

        <Bulma.Column>
          <Bulma.Elements.Title subTitle>
            @types/twit
          </Bulma.Elements.Title>

          <p className='mb-3'>
            <Intent link='https://www.npmjs.com/package/twit'>twit</Intent>の型定義が古くて1枚の画像の取得しかできなそうだったので追加したPR
          </p>

          <div className='buttons are-medium'>
            <Intent link='https://github.com/DefinitelyTyped/DefinitelyTyped/pull/53197'>
              <Bulma.Elements.Button isRounded color='is-dark'>GitHub PR</Bulma.Elements.Button>
            </Intent>

            <Intent link='https://www.npmjs.com/package/@types/twit'>
              <Bulma.Elements.Button isRounded color='is-success'>npmjs.com</Bulma.Elements.Button>
            </Intent>
          </div>

        </Bulma.Column>

      </Bulma.Column>
    </Box>

  </Layout>
);

export default Works;
