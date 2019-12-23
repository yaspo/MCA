import Router from 'koa-router';
import { UserInfo } from '../../../CorsaceModels/user';

const userRouter = new Router();

userRouter.get("/", async (ctx) => {
    const user: UserInfo = ctx.state.user.getInfo()
    ctx.body = { user }
})

export default userRouter;