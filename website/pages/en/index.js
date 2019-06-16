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
        <img src={props.img_src} alt="Project Logo"/>
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
      color: '#FFF',
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
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`}/>
        <div style={heroStyle}>
          <div className="wrap">
            <div style={titleStyle}>
              <strong>UWA CITS</strong>
            </div>
            <div style={descriptionStyle}>
              Enriching your learning with modern technology
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

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="justify"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <Block>
        {[
          {
            content:
              '<div style="color: #FFF; margin-top: 50px">' +
              '<div>    ' +
              '<strong>UWA CITS</strong> is a Discord server made by students, for students. <br><br> Discuss your subjects and exam questions with your peers and participate in discussion in an enriched workplace. <br><br>' +
              'Our bot allows for easy assignment of subjects to each user, without worrying about spam and clustered channels. <br><br> Custom subject commands are available, all at your fingertips. ' +
              '</div>' +
              '<br>' +
              '<a class="button" href="https://discordapp.com/invite/r9RJ6Gg" style="text-transform: none">Join Now</a>\n' +
              '</div>'
            ,
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
        <HomeSplash siteConfig={siteConfig} language={language}/>
        <div>
          <Description/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
