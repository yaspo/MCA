<template>
    <div class="login">
        <div 
            class="login__close"
            @click="close"
        >
            X
        </div>
        <div class="login__title">
            login
        </div>
        It seems that you have not registered an account!<br>Simply login with osu! and you can start voting/nominating immediately!
        <div class="login__osu">
            <img src="../../../CorsaceAssets/img/osu.png">
            <a 
                class="login__osuText"
                href="/api/login/osu"
            >
                click here to authenticate with osu!
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    methods: {
        close () {
            this.$emit("close");
        },
    },
});
</script>

<style lang="scss">
.login {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.83);
    z-index: 100;
    backdrop-filter: blur(7px);
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    text-shadow: 0px 0px 16px #ffffff;

    div, a {
        margin: 35px;
    }
}

.login__close {
    font-size: 5rem;
    position: fixed;
    top: 20%;
    right: 20%;
    cursor: pointer;
}

.login__title {
    font-family: 'Lexend Peta';
    font-size: 3rem;
}

.login__osu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login__osuText {
    cursor: pointer;
    padding: 12px 100px;
    background-color: white;
    border-radius: 15px;
    color: black;
    font-style: italic;
    text-shadow: 0px 0px 16px #000000;
    box-shadow: 0px 0px 16px #ffffff;
}
</style>