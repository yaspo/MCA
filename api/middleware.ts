import { User } from "../../CorsaceModels/user"

async function isEligible(ctx, next): Promise<void> {
    if (!ctx.params.year) {
        ctx.body = { error: "No year given!" }
        return
    }

    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        ctx.body = { error: "No user found!" }
        return
    }
    
    for (const eligibility of user.mca) {
        if (eligibility.year === ctx.params.year) {
            next()
            return
        }
    }
    
    ctx.body = { error: "User is not eligible!" }
}

async function isNotEligible(ctx, next): Promise<void> {
    if (!ctx.params.year) {
        ctx.body = { error: "No year given!" }
        return
    }

    const user = await User.findOne({ relations: ["mca"], where: { id: ctx.state.user.id }})
    if (!user) {
        ctx.body = { error: "No user found!" }
        return
    }
    
    for (const eligibility of user.mca) {
        if (eligibility.year === ctx.params.year) {
            ctx.body = { error: "User is eligible!" }
            return
        }
    }
    
    next()
}

export { isEligible, isNotEligible }