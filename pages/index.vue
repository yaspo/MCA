<template>
    <div>
        <a href="/api/login/discord" v-if="!user || user.discord.userID === ''">login discord</a>
        <a href="/api/login/osu" v-if="(user && user.osu.userID === '')"> login osu!</a>
        <div v-if="user">
            Discord username: {{ user.discord.username }}<br>
            osu! username: {{ user.osu.username }}<br>
            <p v-if="eligible"> You are eligible </p>
            <p v-else> You are not eligible </p>
        </div>
        {{ value }}
        <div @click="run">
            click to run
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            user: null,
            value: "0%",
            eligible: false,
        }
    },
    mounted: async function() {
        try {
            const data = (await axios.get(`/api/user`)).data;
            
            if (!data.error) {
                this.user = data.user;
            } else {
                console.log(data.error)
            }
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        async run () {
            console.log((await axios.post(`/api/user/guestDifficulty/2019/osu`)).data)
        },
    },
}
</script>