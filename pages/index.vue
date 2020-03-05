<style>
html {
  height: 100%;
}
body {
  margin:0;
  min-height: 100%;
  background-image: url("../../CorsaceAssets/img/ayim-mca/site/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.header {
  display: flex;
  overflow: hidden;
  background-color: #000;
  border-bottom-style: solid;
  border-bottom-color: #FFF;
  align-items: center;
  top: 0;
  width: 100%;

}

.header a {
  float: left;
  text-decoration: none;
  font-family: 'Red Hat Display', sans-serif;
  position: relative;
}

.seperator {
	margin-left: 20px;
}


.mca_active {
  font-size: 25px;
  line-height: 0.86;
  letter-spacing: 10px;
  color: #fff;
  margin-left: 3%;

}

.mca {
  font-size: 25px;
  line-height: 0.86;
  letter-spacing: 10px;
  color: #4c4c4c;
  margin-left: 3%;
}

.ayim_active {
  font-size: 25px;
  line-height: 0.86;
  letter-spacing: 10px;
  color: #fff;
  margin-left: 3%;

}

.ayim {
  font-size: 25px;
  line-height: 0.86;
  letter-spacing: 10px;
  color: #4c4c4c;
  margin-left: 3%;
}

.login{
  line-height: 1.19;
  letter-spacing: 1.89px;
  color: #d8d8d8;
  margin-left: 40%;
}
 
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

.desc {
	font-family: 'Red Hat Display', sans-serif;
	font-size: 1vw;
}

.date {
	font-family: 'Red Hat Display', sans-serif;
	font-size: 1vw;
	margin-bottom: 5%;
}

.headings {
	margin-top: 5%;
	font-family: 'Lexend Peta', bold;
	font-size: 4vw;
}

.footer {
  overflow: hidden;
  background-color: #000;
  border-top-style: solid;
  border-top-color: #FFF;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9%;
}
.corsace {
  margin-left: 1%;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.logo {
  float: left;
  display: block;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);;
}

.logo img {
	height: 90px;
}

.logo_text {
  float: left;
  display: block;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.logo_text img {
	height: 40px;
}

.dot_seperator {
  position: relative;
  top: 45%;
  -ms-transform: translateY(-45%);
  transform: translateY(-45%);
}

.dot{
	margin-left: 2%;
  float: left;
  display: block;
  top: 45%;
  -ms-transform: translateY(-45%);
  transform: translateY(-45%);
}

.dot img {
	height: 5px;
}

.socials {
  margin-left: 10%;
  position: relative;
  left: 2%;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.socials img {
	height: 70px;
}
</style>

<template>
    <div>
        <div class="header">
            <img src="../../CorsaceAssets/img/ayim-mca/site/2019.png">
            <a
                class="mca_active"
                href="#MCA"
            >MAPPERS'S <br> CHOICE <br> AWARDS</a>
            <a class="seperator"><img src="../../CorsaceAssets/img/ayim-mca/site/l.png"></a>
            <a
                class="ayim"
                href="ayim.html"
            >A YEAR <br> IN <br> MAPPING</a>
            <a
                class="login"
                href="#login"
            >LOG IN</a>
        </div>

        <div class="home">
            <!---TODO: SETTLE ON A DESIGN AND REPLACE PLACEHOLDER--->
            <div class="headings">
                MCA HEADING
            </div>
	
            <div class="date">
                01/01/20 10PST - 01/13/20 10 PST
            </div>

            <!---TODO: STYLE TEXTBOX IF NEEDED--->
            <div class="desc">
                Mapper's Choice Awards is back for round 4 in 2019! This is a voting event where all mappers/modders can nominate and <br> 
                vote what they think is the best map/mapper for each category. <br><br>

                Our intention is to give a new perspective on the best maps of 2019 through the eyes of the mapping community! <br><br>

                This year, we have separated storyboarding from the other modes to give them more emphasis, as well as going with a Google Form submission, <br>
                making it as easy as possible for you to vote/nominate! <br><br>

                We hope as many participants as possible take part in this event!
            </div>
	
            <!---TODO: GET IMAGE ASSETS FOR MODE ICONS--->
        </div>

        <div class="footer">
            <div class="corsace">
                <div class="logo">
                    <img src="../../CorsaceAssets/img/ayim-mca/site/corsace logo.png">
                </div>
                <div class="logo_text">
                    <img src="../../CorsaceAssets/img/ayim-mca/site/corsace text.png">
                </div>
            </div>
	
            <div class="dot_seperator">
                <div class="dot">
                    <img src="../../CorsaceAssets/img/ayim-mca/site/d.png">
                </div>
            </div>

            <div class="socials">
                <a href="https://twitter.com/vinxis1"> <img src="../../CorsaceAssets/img/ayim-mca/site/twitter.png"> </a>
                <a href="https://open.corsace.io/discord.94b52bb5.png"><img src="../../CorsaceAssets/img/ayim-mca/site/discord.png"></a>
                <a href="https://open.corsace.io/twitch.6a390bfe.png"><img src="../../CorsaceAssets/img/ayim-mca/site/ttv.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            user: null,
            value: "0%",
            eligible: false,
        };
    },
    mounted: async function() {
        try {
            const data = (await axios.get(`/api/user`)).data;

            if (data.error) {
                alert(data.error);
            } else {
                this.user = data.user;
                for (const eligibility of this.user.mca) {
                    if (eligibility.year === (new Date).getUTCFullYear) {
                        this.eligible = true;
                    }
                }
            }
        } catch (err) {
            console.error(err);
        }
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
};
</script>