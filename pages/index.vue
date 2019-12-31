<template>
    <div>
        <a href="/api/login/discord" v-if="!user || user.discord.userID === ''">login discord</a>
        <a href="/api/login/osu" v-if="(user && user.osu.userID === '')"> login osu!</a>
        <div v-if="user">
            Discord username: {{ user.discord.username }}<br>
            osu! username: {{ user.osu.username }}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            user: null
        }
    },
    mounted: async function() {
        try {
            const data = (await axios.get(`/api/user`)).data;
            
            if (!data.error) {
                console.log(data.user)
                this.user = data.user;
            } else {
                console.log(data.error)
            }
        } catch (err) {
            console.log(err);
        }
    },
}
</script>