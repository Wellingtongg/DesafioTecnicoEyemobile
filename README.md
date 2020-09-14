# Desafio Técnico Eyemobile

## Instalação do Frontend

1. Entre na pasta frontend e execute `yarn install` ou `npm install`
2. Para iniciar o servidor execute `yarn start` ou `npm run start`

## Instalação do Backend

1. Entre na pasta backend e execute `yarn install` ou `npm install`
2. Configure a conexão do seu banco de dados no arquivo knexfile.ts
3. Caso não tenha o npx instalado execute `npm install -g npx`
4. Execute `npx knex migrate:latest` para que a tabela transactions seja criada no banco
5. Para iniciar o servidor execute `yarn start` ou `npm run start`

### Informações adicionais

A Documentação da API está no arquivo swagger.txt, também podendo ser encontrada no [Apiary](https://desafiotecnicobackend.docs.apiary.io/)

O template das requisições da API no Insomnia está no arquivo Insomnia_desafio_back_end.json
