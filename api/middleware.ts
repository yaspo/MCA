async function isEligible(ctx, next): Promise<void> {
    if (!ctx.params.year) {
        ctx.body = { error: "No year given!" }
        return
    }
    
    for (const eligibility of ctx.state.user.mca) {
        if (eligibility.year === ctx.params.year) {
            await next()
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
    
    for (const eligibility of ctx.state.user.mca) {
        if (eligibility.year === ctx.params.year) {
            ctx.body = { error: "User is eligible!" }
            return
        }
    }
    
    await next()
}

export { isEligible, isNotEligible }