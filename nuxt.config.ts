import { Config } from "../config"
const config = new Config;
export default {
  serverMiddleware: ['~/api'],
  buildModules: ['@nuxt/typescript-build'],
  server: {
    host: config.mca.host,
    port: config.mca.port,
  },
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en', 
            name: 'English',
            file: 'en.json'
          },
          {
            code: 'de', 
            name: 'German',
            file: 'de.json'
          },
          {
            code: 'cn', 
            name: 'Chinese',
            file: 'cn.json'
          },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: '../CorsaceAssets/lang/',
        vueI18n: {
          fallbackLocale: 'en',
        }
      }
    ]
  ],
}
