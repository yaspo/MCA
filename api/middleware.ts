import { User } from "../../CorsaceModels/user"

async function isEligible(ctx, next) {
    if (!ctx.params.year) {
        return ctx.body = { error: "No year given!" }
    }

    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        return ctx.body = { error: "No user found!" }
    }
    
    for (let eligibility of user.mca) {
        if (eligibility.year === ctx.params.year) {
            return next()
        }
    }
    
    return ctx.body = { error: "User is not eligible!" }
}

async function isNotEligible(ctx, next) {
    if (!ctx.params.year) {
        return ctx.body = { error: "No year given!" }
    }

    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        return ctx.body = { error: "No user found!" }
    }
    
    for (let eligibility of user.mca) {
        if (eligibility.year === ctx.params.year) {
            return ctx.body = { error: "User is eligible!" }
        }
    }
    
    return next()
}

export { isEligible, isNotEligible }