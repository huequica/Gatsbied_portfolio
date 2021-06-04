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
    <Bulma.layout.Hero colorStyle='is-primary'>
      <Bulma.elements.Title>/worsks</Bulma.elements.Title>
    </Bulma.layout.Hero>
    
    <Bulma.elements.Title># 個人の制作物</Bulma.elements.Title>

    <Box> { /* @HikakinSymmetry */ }
      <Bulma.Column Parent>
        <Bulma.Column size='is-3'>
          <Image filename='hikakinsymmetry.png' alt='@hikakinSymmetry'/>
        </Bulma.Column>

        <Bulma.Column>
          <Bulma.elements.Title subTitle>
            # ヒカキンシンメトリーbot(新)
          </Bulma.elements.Title>

          <Intent link='https://twitter.com/hikakin_sym'>ヒカキンシンメトリーbot</Intent>の稼働が止まっていたので再実装して公開したbot<br />
          百聞は一見に如かずなので一回Twitterを見てほしい
          
          <div className='buttons are-medium'>
            <Intent link='https://github.com/HIKAKINSymmetry/nodeBot'>
              <Bulma.elements.Button isRounded color='is-dark'>GitHub</Bulma.elements.Button>
            </Intent>

            <Intent link='https://twitter.com/hikakinsymmetry'>
              <Bulma.elements.Button isRounded color='is-success'>Twitter</Bulma.elements.Button>
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
          <Bulma.elements.Title subTitle>
            soundrop_OtogibaraEra
          </Bulma.elements.Title>
          にじさんじに所属(していた)御伽原江良の声を出すだけのおもちゃ<br />
          Reactを知るために作ったが、ロゴも自分で作ってたりする<br />
          かつてはCircle CIでEC2に自動デプロイまでしていた(今はインスタンスごと消した)

          <div className='buttons are-medium'>
            <Intent link='https://github.com/huequica/soundrop_OtogibaraEra'>
              <Bulma.elements.Button isRounded color='is-dark'>GitHub</Bulma.elements.Button>
            </Intent>

            <Intent link='https://suspicious-curran-504da5.netlify.app/'>
              <Bulma.elements.Button isRounded color='is-info'>Sample</Bulma.elements.Button>
            </Intent>
          </div>

        </Bulma.Column>

      </Bulma.Column>
    </Box>
            </Intent>
          </div>

        </Bulma.Column>

      </Bulma.Column>
    </Box>

  </Layout>
);

export default Works;
