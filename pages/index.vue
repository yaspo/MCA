<template>
    <h1>test</h1>
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