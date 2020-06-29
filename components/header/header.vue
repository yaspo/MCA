<template>
    <div class="header">
        <img src="../../../CorsaceAssets/img/ayim-mca/site/2019.png">
        <a
            class="header__title--active"
            href="#MCA"
        >MAPPERS'S <br> CHOICE <br> AWARDS</a>
        <a class="header__seperator"><img src="../../../CorsaceAssets/img/ayim-mca/site/l.png"></a>
        <a
            class="header__title"
            href="ayim.html"
        >A YEAR <br> IN <br> MAPPING</a>
        <a
            v-if="!user"
            class="header__login"
            @click="login=!login"
        >LOG IN</a>
        <div 
            v-else
            class="header__login"
        >
            <div class="header__login--text">
                <div class="header__login--gray">
                    welcome back
                </div>
                <div>
                    {{ user.osu.username }}
                </div>
            </div>
            <div class="header__login--profile">
                <img 
                    :src="user.osu.avatar"
                    class="header__login--image"
                >
                <div class="triangle" />
            </div>
        </div>

        <login 
            v-if="login"
            @close="login=false"
        />
    </div>
</template>

<script>
import login from "./login";

export default {
    components: {
        "login": login,
    },
    props: {
        user: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data () {
        return {
            login: false,
        };
    },
};
</script>

<style lang="scss">
.header {
	display: flex;
	overflow: hidden;
	background-color: #000;
	border-bottom-style: solid;
	border-bottom-color: #FFF;
	align-items: center;
    width: 100%;
    flex: 0 0 auto;

	a {
		float: left;
		text-decoration: none;
		position: relative;
	}
}

.header__seperator {
	margin-left: 20px;
}

.header__title {
	font-size: 25px;
	line-height: 0.86;
	letter-spacing: 10px;
	color: #4c4c4c;
	margin-left: 3%;

	&--active {
		font-size: 25px;
		line-height: 0.86;
		letter-spacing: 10px;
		color: #fff;
		margin-left: 3%;
	}
}

.header__login {
	display: flex;
	text-align: right;
	line-height: 1.19;
	letter-spacing: 1.89px;
	color: #d8d8d8;
	margin-left: 35%;
	cursor: pointer;
	align-items: center;
	justify-content: space-around;

	&--gray {
		color: #6f6f6f;
	}

	&--profile {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	&--image {
		border-radius: 50%;
		width: 35%;
	}
}
</style>