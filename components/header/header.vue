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
            <div class="header__login--text header__login--flex">
                <div class="header__login--gray">
                    welcome back
                </div>
                <div>
                    {{ user.osu.username }}
                </div>
            </div>
            <div 
                :class="{'header__login--active': logout}"
                class="header__login--profile header__login--flex" 
                @click="logout=!logout"
            >
                <img 
                    :src="avatarURL"
                    class="header__login--image"
                >
                <div 
                    :class="{'triangle--active': logout}"
                    class="triangle" 
                />
            </div>
        </div>

        <login 
            v-if="login"
            @close="login=false"
        />
        <div 
            v-else-if="logout"
            class="header__logout"
            @click="logout=!logout"
        >
            test
        </div>
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
            logout: false,
        };
    },
    computed:  {
        avatarURL: function()  {
            return this.user && this.user.osu ? this.user.osu.avatar + "?" + Math.round(Math.random()*1000000) : "";
        },
    },
};
</script>

<style lang="scss">
.header {
	display: flex;
	background-color: #000;
	border-bottom-style: solid;
	border-bottom-color: #FFF;
	align-items: center;
    width: 100%;
    flex: 0 0 auto;
	padding: 0 20px;
	position: relative;

	a {
		float: left;
		text-decoration: none;
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
	font-size: 1.25rem;
	line-height: 1.19;
	letter-spacing: 1.89px;
	color: #d8d8d8;
	cursor: pointer;
	align-items: center;
	justify-content: flex-end;
	margin-left: 34%;
	height: 100%;

	&--active {
		background-color: white;
		border-radius: 20% 20% 0 0;
	}

	&--text {
		cursor: initial;
		padding-right: 10px;
	}

	&--gray {
		font-size: 1rem;
		color: #6f6f6f;
	}

	&--flex {
		flex: 1;
	}

	&--profile {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	&--image {
		border-radius: 50%;
		width: 50%;
	}
}

.header__logout {
	position: absolute;
	right: 0;
	bottom: -15%;
}
</style>