<h1 align="center" style="border-bottom: none;">🎤 Desmonstração de Fala para Texto </h1>
<h3 align="center">Aplicativo de demonstração em Node.js que apresenta alguns recursos do serviço Speech to Text do IBM Watson.</h3>
<p align="center">
  <a href="http://travis-ci.org/watson-developer-cloud/speech-to-text-nodejs">
    <img alt="Travis" src="https://travis-ci.org/watson-developer-cloud/speech-to-text-nodejs.svg?branch=master">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>
</p>

O serviço [Speech to Text][service_url] utiliza os recursos de reconhecimento de fala da IBM para converter a fala de vários idiomas em texto. A transcrição de áudio de entrada é continuamente enviada de volta ao cliente com um mínimo de atraso, e é corrigida à medida que mais fala é ouvida. O serviço é acessado através de uma interface WebSocket; uma interface HTTP REST também está disponível;

Você pode ver uma [demonstração][demo_url] deste aplicativo.

## Pré-requisitos

1. Inscreva-se em uma [conta do IBM Cloud](https://console.bluemix.net/registration/).
1. Faça Download do [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview).
1. Crie uma instância do serviço Speech to Text e obtenha suas credenciais:
    - Vá para a página [Speech to Text](https://console.bluemix.net/catalog/services/speech-to-text) do Catálogo do Cloud da IBM.
    - Faça login na sua conta do IBM Cloud.
    - Clique em **Criar**.
    - Clique **Mostrar Credenciais** para ver as credenciais do serviço.
    - Copie o valor da `apikey`, ou copie o `username` (Nome do Usuário) e `password` (Senha) se a sua instância de serviço não fornecer uma `apikey`.
    - Copie o valor da `url` da API.

## Configurando o aplicativo

1. Faça uma clonagem deste repositório, tal como, na linha de comando de exemplo do Linux abaixo: 

    ```
    mkdir ~/Apps
    cd ~/Apps
    git clone https://github.com/giovanebarcelos/speech-to-text-nodejs
    cd ~/Apps/speech-to-text-nodejs 
    ```

2. Na pasta do aplicativo, copie o arquivo * .env.example * e crie um arquivo chamado * .env *

    ```
    cp .env.example .env
    ```

3. Abra o arquivo * .env * e adicione as credenciais de serviço obtidas na etapa anterior.

    Exemplo * .env * arquivo que configura o `apikey` e a ` url` para uma instância do serviço Speech to Text hospedada na região sul dos EUA:
    ```
    SPEECH_TO_TEXT_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
    SPEECH_TO_TEXT_URL=https://stream.watsonplatform.net/speech-to-text/api
    ```
    - Se sua instância de serviço usa credenciais `username` (Nome de usuário) e` password` (Senha), preencha as variáveis `SPEECH_TO_TEXT_USERNAME` e` SPEECH_TO_TEXT_PASSWORD` no arquivo * .env *. Certifique-se também que a URL esta correta anotado anteriormente.

    Exemplo de arquivo * .env * que configura o `username`,` password` e `url` para uma instância do serviço Speech to Text hospedada na região do sul dos EUA

    ```
    SPEECH_TO_TEXT_USERNAME=522be-7b41-ab44-dec3-g1eab2ha73c6
    SPEECH_TO_TEXT_PASSWORD=A4Z5BdGENrwu8
    SPEECH_TO_TEXT_URL==https://stream.watsonplatform.net/speech-to-text/api
    ```

## Rodando Localmente

1. Instale as dependências

    ```
    npm install
    ```

1. Execute a aplicação

    ```
    npm start
    ```

1. Visualize a aplicação em um navegador no endereço `localhost:3000`

## Vamos implantar esta aplicação no IBM Cloud como um aplicativo Cloud Foundry

1. Faça o login no IBM Cloud com o [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview), escolhendo a localização da API registrada anteriormente. No caso do Sul dos Estados Unidos deve utilizar a opção 4 (us-south), que corresponde aos exemplos apresentados até aqui.

    ```
    ibmcloud login
    ```

1. Defina uma organização e um espaço no Cloud Foundry

    ```
    ibmcloud target --cf
    ```

1. Edite o arquivo *manifest.yml* . Altere os seguintes campos: 
   - **name** para algo único. Por exemplo, `- name: my-app-name` 
   - **memory** para `256M` se estiver utilizando a versão gratuita 
   - **my-stt-service** para o nome do serviço `Speech to Text` que foi criado no Bluemix

1. Deploy the application

    ```
    ibmcloud app push
    ```

1. Visualize o aplicativo on-line na URL do aplicativo, por exemplo: https://my-app-name.mybluemix.net


## Licença

   Este código de amostra está licenciado no Apache 2.0.
   
## Open Source @ IBM
   
   Encontre mais projetos de código aberto na [Página do IBM Github](http://ibm.github.io/)


[service_url]: https://www.ibm.com/watson/services/speech-to-text/
[docs]: https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl
[sign_up]: https://console.bluemix.net/registration/?target=/catalog/services/speech-to-text/
[demo_url]: https://speech-to-text-demo.ng.bluemix.net
