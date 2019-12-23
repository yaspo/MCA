import "reflect-metadata";
import { Config } from "../../config"
import { App } from "../../commonRoutes"
import Mount from 'koa-mount';
import userRouter from "./user"

const config = new Config()
const app = new App(config.mca.publicURL, config.mca.keys)

app.koa.use(Mount("/user", userRouter.routes()));

export default {
    path: "/api",
    handler: app.koa.callback(),
}
