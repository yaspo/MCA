<template>
    <div>
        <a href="/api/login/discord" v-if="!user || user.discord.userID === ''">login discord</a>
        <a href="/api/login/osu" v-if="(user && user.osu.userID === '')"> login osu!</a>
        <div v-if="user">
            Discord username: {{ user.discord.username }}<br>
            osu! username: {{ user.osu.username }}
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
            value: "0%"
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
            console.log((await axios.get(`/api/user/test/2019`)).data)
        },
    },
}
</script>