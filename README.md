![Cover](.github/cover.png)

# Rocketseat NLW eSports

Evento da [Rocketseat](https://www.rocketseat.com.br). Aplicação Full Stack para conectar jogadores.

## Requisitos

- [Node](https://nodejs.org) versão LTS
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/getting-started/install)
- [Expo](https://docs.expo.dev/get-started/installation)

## Instruções

1. Renomeie o arquivo `.env.example` para `.env` dentro da pasta `server`
1. Semeie os games no banco de dados rodando `yarn seed` dentro da pasta `server`
1. Inicie o servidor do backend em um terminal, rodando o comando `npm run dev` ou `yarn dev` dentro da pasta `server`
1. Inicie o servidor da web em outro terminal, rodando `npm run dev` ou `yarn dev` dentro da pasta `web`
1. Para utilizar o aplicativo web, basta abrir [http://localhost:5173](http://localhost:5173) em algum browser
1. Inicie o servidor do app em outro terminal, rodando `npx expo start` dentro da pasta `app`
1. Para iniciar o app, basta seguir as instruções do [Expo](https://docs.expo.dev/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet) para iniciá-lo em um emulador ou dispositivo físico

## Tech Stack

- [TypeScript](https://www.typescriptlang.org)

### Backend

- [Node](https://nodejs.org)
- [Express](https://expressjs.com)
- [Prisma](https://www.prisma.io)
- [SQLite](https://www.sqlite.org/index.html)
- [yup](https://github.com/jquense/yup)

### Web

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Tailwind](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [React Hook Form](https://react-hook-form.com)
- [Axios](https://axios-http.com)
- [yup](https://github.com/jquense/yup)

### App

- [React](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [Expo](https://docs.expo.dev/index.html)
- [React Navigation](https://reactnavigation.org)
- [Axios](https://axios-http.com)

## Alterações minhas incluem

- Responsividade no aplicativo Web
- Validação de dados no backend e na Web
- Slider para os games na Web
