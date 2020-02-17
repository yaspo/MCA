import Router from 'koa-router';
import { User } from '../../../CorsaceModels/user';
import { isLoggedIn } from '../../../CorsaceServer/middleware'
import { isNotEligible } from '../middleware';

const userRouter = new Router();

userRouter.get("/", isLoggedIn, async (ctx) => {
    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        return ctx.body = { error: "No user found!" }
    }

    ctx.body = { user: user.getInfo() }
})

userRouter.post("/guestDifficulty/:year/:url", isLoggedIn, isNotEligible, async (ctx) => {
    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})

    const linkRegex = /(osu|old)\.ppy\.sh\/(s|b|beatmaps|beatmapsets)\/(\d+)(#(osu|taiko|fruits|mania)\/(\d+))?/i;

    if (!linkRegex.test(ctx.params.url)) {
        ctx.body = { error: "Invalid URL!"}
        return
    }

    
})

export default userRouter;