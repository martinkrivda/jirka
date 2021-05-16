# Jirka

Information system for sports clubs

| Branch      | Status |
| ----------- | ------ |
| `develop`\* |        |
| `main`      |        |

<sub>\* `develop` was selected as the main branch</sub>

We will be using [Node.js](https://nodejs.org/) v14.16.1.
New JavaScript features (ES2015) are "enabled" for for all modern browsers with [Babel](https://babeljs.io/).

## JavaScript Packages

- [yarn CLI docs](https://yarnpkg.com/en/docs/cli/)
- Useful commands:
  - `yarn install` (install local dependencies - based on `package.json` and `yarn.lock` files)
  - `yarn add <package-name>`
  - `yarn <script-name>` (eg. `yarn start`, `yarn prettier`, see `"scripts"` section in `package.json`)
  - `yarn run`
- Search for packages:
  - [npmjs.com](https://www.npmjs.com/)
  - **[js.coach/react](https://js.coach/react)**

## React

- **[React docs](https://reactjs.org/docs/getting-started.html)**
- frontend app is created using [create-react-app](https://create-react-app.dev/)
- using TypeScript
- using [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)

## NodeJS Express

- **[Express docs](https://expressjs.com/en/starter/hello-world.html)**

## GraphQL

- **[Apollo docs](https://www.apollographql.com/docs/)**

## Prisma ORM

- **[Prisma docs](https://www.prisma.io/)**

## Local development

### BE

```bash
Create backend/.env from the template in backend/.env.example and fill in the credentials to your database and keys to 3rd party.
cd backend/
yarn install
yarn dev
```

### FE

```bash
Create frontend/.env from the template in frontend/.env.example and fill settings for frontend environment.
cd frontend/
yarn install
yarn start
```

## Deployment

[Deployment docs](docs/DEPLOYMENT.md).

## Contributing

Please read [Contributing docs](docs/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1. Create your feature branch: `git checkout -b Feature/my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin Feature/my-new-feature`
4. Submit a pull request :D

## Credits

- **Martin Křivda** - _Initial work_
