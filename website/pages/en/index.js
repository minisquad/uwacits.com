/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div>{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const heroStyle = {
      background: '#1E1F24',
      padding: '50px 0',
      color: '#fdf3e7',
      fontWeight: 300,
      lineHeight: 1.28
    };

    const titleStyle = {
      fontSize: '64px',
      textAlign: 'center'
    };

    const descriptionStyle = {
      fontSize: '16px',
      textAlign: 'center',
      textTransform: 'uppercase'
    };

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div style={heroStyle}>
          <div className="wrap">
            <div style={titleStyle}>
              <strong>UWA CITS</strong>
            </div>
            <div style={descriptionStyle}>
              Discuss your subjects with your peers
            </div>
          </div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    const buttonStyle = {
      color: 'black'
    };

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <div style={{textAlign: 'center'}}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
          <br/>
        <a style={buttonStyle} href="https://www.google.com.au">Join Now</a>
        </div>
      </Container>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Discuss questions, exams and projects with your peers for your undergraduate CITS units.',
            image: `${baseUrl}img/undraw_ai.svg`,
            imageAlign: 'right'
          },
        ]}
      </Block>
    );
    const background = {
      background: '#808080'
    };

    return (
      <div style={background}>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div>
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
