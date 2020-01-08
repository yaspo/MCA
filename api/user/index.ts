import Router from 'koa-router';
import { User } from '../../../CorsaceModels/user';
import { PassThrough } from 'stream';
import { Config } from '../../../config';
import axios from 'axios'
import { isLoggedIn, isCorsace, isStaff } from '../../../CorsaceServer/middleware'

const userRouter = new Router();
const config = new Config();

userRouter.get("/", isLoggedIn, async (ctx) => {
    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        return ctx.body = { error: "No user found!" }
    }

    ctx.body = { user: user.getInfo() }
})

userRouter.get("/test/:year", isLoggedIn, isCorsace, async (ctx) => {
    const stream = new PassThrough()
    ctx.type = 'text/event-stream';
    ctx.body = stream

    let mapDate = `${ctx.params.year}-01-01`;
    const base = new Date(mapDate).valueOf()
    const denom = Date.parse("2020-01-01")-base
    while (Date.parse(mapDate) < Date.parse("2020-01-01")) {
        console.log(`https://osu.ppy.sh/api/get_beatmaps?k=${config.osu.v1}&since=${mapDate}`)
        let maps = (await axios.get(`https://osu.ppy.sh/api/get_beatmaps?k=${config.osu.v1}&since=${mapDate}`)).data
        if (maps.length === 0)
            break
    
        stream.write(`data: ${Math.round(100*(new Date(mapDate).valueOf()-base) / denom)}%\n\n`)
        mapDate = maps[maps.length-1].approved_date
    }
})

export default userRouter;