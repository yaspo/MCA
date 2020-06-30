import { Config } from "../config";
import * as fs from "fs";

const config = new Config;
const locales: any[] = [];

fs.readdirSync("../CorsaceAssets/lang").forEach(file => {
    if (file !== "example.json" && file !== "index.js")
        locales.push({
            code: file.split(".")[0],
            file,
        });
});

export default {
    serverMiddleware: ["~/api"],
    buildModules: ["@nuxt/typescript-build"],
    server: {
        host: config.mca.host,
        port: config.mca.port,
    },
    modules: [
        [
            "nuxt-i18n",
            {
                locales,
                defaultLocale: "en",
                lazy: true,
                langDir: "../CorsaceAssets/lang/",
                vueI18n: {
                    fallbackLocale: "en",
                },
            },
        ],
    ],
    head: {
        link: [
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lexend+Peta&display=swap" },
        ],
    },
    css: [
        "@/assets/main.scss",
    ],
};
