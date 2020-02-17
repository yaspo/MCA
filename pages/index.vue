<template>
  <div>
	<a
		v-if="!user || user.discord.userID === ''"
		href="/api/login/discord"
	>login discord</a>
	<a
		v-if="(user && user.osu.userID === '')"
		href="/api/login/osu"
	> login osu!</a>
	<div v-if="user">
		Discord username: {{ user.discord.username }}<br>
		osu! username: {{ user.osu.username }}<br>
	<p v-if="eligible">
		You are eligible
	</p>
	<p v-else>
		You are not eligible
	</p>
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
			console.log(data)

			if (data.error) {
				console.log(data.error)
			} else {
				this.user = data.user;
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