import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-mnext-lin =

const DESCRIPTION = 'O serviço Speech to Text do IBM Watson usa recursos de reconhecimento de fala para converter fala Árabe, Inglês, Espanhol, Francês, Português do Brasil, Japonês, Coreano, Alemão e Mandarim em texto.';
const GDPR_INFO = 'Este sistema é apenas para fins de demonstração e não se destina a processar dados pessoais. Nenhum dado pessoal deve ser inserido neste sistema, pois pode não ter os controles necessários para atender aos requisitos do Regulamento Geral de Proteção de Dados da União Européia (UE) 2016/679.';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Demonstração de Fala para Texto
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="Fala pra Texto"
          mainBreadcrumbsUrl="https://www.ibm.com/watson/services/speech-to-text/"
          subBreadcrumbs="Demonstração de Fala para Texto"
          subBreadcrumbsUrl="https://speech-to-text-demo.ng.bluemix.net"
        />
        <Jumbotron
          serviceName="Speech to Text"
          repository="https://github.com/watson-developer-cloud/speech-to-text-nodejs"
          documentation="https://console.bluemix.net/docs/services/speech-to-text/getting-started.html"
          apiReference="http://www.ibm.com/watson/developercloud/speech-to-text/api"
          version="GA"
          serviceIcon="/images/stt.svg"
          startInBluemix="https://console.bluemix.net/registration/?target=%2Fcatalog%2Fservices%2Fspeech-to-text%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409"
          description={DESCRIPTION}
        />

        <div className="_container _container_large gdpr-info">
          {GDPR_INFO}
        </div>
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
        <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
