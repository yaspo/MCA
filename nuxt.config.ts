import { Config } from "../config"
const config = new Config;
export default {
  serverMiddleware: ['~/api'],
  buildModules: ['@nuxt/typescript-build'],
  server: {
    host: config.mca.host,
    port: config.mca.port,
  },
}
