import Router from 'koa-router';
import { User } from '../../../CorsaceModels/user';
import { isLoggedIn } from '../../../CorsaceServer/middleware'
import { isNotEligible } from '../middleware';

const UserRouter = new Router();

UserRouter.get("/", isLoggedIn, async (ctx) => {
    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        ctx.body = { error: "State user does not match any users in database!" }
        return 
    }

    ctx.body = { user: user.getInfo() }
})

UserRouter.post("/guestDifficulty/:year/:url", isLoggedIn, isNotEligible, async (ctx) => {
    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})

    const linkRegex = /(osu|old)\.ppy\.sh\/(s|b|beatmaps|beatmapsets)\/(\d+)(#(osu|taiko|fruits|mania)\/(\d+))?/i;

    if (!linkRegex.test(ctx.params.url)) {
        ctx.body = { error: "Invalid URL!"}
        return
    }

    
})

export default UserRouter;