<template>
    <div>
        <div class="home">
            <!---TODO: SETTLE ON A DESIGN AND REPLACE PLACEHOLDER--->
            <div class="home__headings">
                test
            </div>
	
            <div class="home__date">
                01/01/20 10PST - 01/13/20 10 PST
            </div>

            <!---TODO: STYLE TEXTBOX IF NEEDED--->
            <div class="home__description">
                Mapper's Choice Awards is back for round 4 in 2019! This is a voting event where all mappers/modders can nominate and <br> 
                vote what they think is the best map/mapper for each category. <br><br>

                Our intention is to give a new perspective on the best maps of 2019 through the eyes of the mapping community! <br><br>

                This year, we have separated storyboarding from the other modes to give them more emphasis, as well as going with a Google Form submission, <br>
                making it as easy as possible for you to vote/nominate! <br><br>

                We hope as many participants as possible take part in this event!
            </div>
	
            <!---TODO: GET IMAGE ASSETS FOR MODE ICONS--->
        </div>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
    props: {
        user: {
            type: Object,
            default: () => {
                return {};
            },
        },
        eligible: Boolean,
    },
    data () {
        return {
            value: "0%",
        };
    },
    methods: {
        async run () {
            const res = (await axios.post(`/api/user/guestDifficulty/2019`, {
                url: "https://osu.ppy.sh/beatmapsets/809748#osu/1699094",
            })).data;
            if (res.error) {
                this.value = res.error;
            } else {
                this.value = "Success!";
            }
        },
    },
});
</script>

<style lang="scss">
.home {
	display:flex;
	flex-direction: column;
	font-size: 12px;
	color: white;
	width: 80%;
	margin: 0 auto;
	text-align: center;
}

/*TODO: MAKE FONT RESPONSIVE THIS IS JUST FOR TESTING */

.home__headings {
	margin-top: 5%;
	font-family: 'Lexend Peta', bold;
	font-size: 4vw;
}

.home__date {
	font-size: 1vw;
	margin-bottom: 5%;
}

.home__description {
	font-size: 1vw;
}
</style>