import "reflect-metadata";
import {createConnection} from "typeorm";
import Koa from 'koa';
import Router from 'koa-router';
import { Config } from "../../config"

const App = new Koa();
const AppRouter = new Router();
const config = new Config;

AppRouter.get("/test", (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello'
    }
    console.log("Good job.")
});

App.use(AppRouter.routes());

createConnection({
    "type": "mariadb",
    "host": "localhost",
    "username": config.database.username,
    "password": config.database.password,
    "database": config.database.name,
    "timezone": "Z",
    "synchronize": true,
    "logging": false,
    "entities": [
       "../../CorsaceModels/**/*.ts"
    ],
}).then(async (connection) => {
    console.log("Connected to the " + connection.options.database + " database!");
}).catch(error => console.log("An error has occurred in connecting: " + error));

export default {
    path: "/api",
    handler: App.callback(),
}
