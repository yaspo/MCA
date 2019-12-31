import Router from 'koa-router';
import { UserInfo, User } from '../../../CorsaceModels/user';

const userRouter = new Router();

userRouter.get("/", async (ctx) => {
    if (!ctx.state.user) {
        return ctx.body = { error: "No user found!" }
    }

    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        return ctx.body = { error: "No user found!" }
    }

    ctx.body = { user: user.getInfo() }
})

export default userRouter;