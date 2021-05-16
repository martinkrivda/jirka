# Deployment

## Frontend

1. Build app with `cd frontend && yarn build`.
2. Serve `frontentd/build` directory as standard static web with web server.
3. Redirect all non-existent files/dirs traffic to `frontend/build/index.html`;

## Backend

1. Build app with `cd backend && yarn build`.
2. Run `frontend/build/main.js` by node via a daemon (e. g. [PM2](https://pm2.keymetrics.io/) or [Nodemon](https://nodemon.io/)).
3. Reverse proxy (via web server) the node app to public address, so that the frontend app can communicate with it.
