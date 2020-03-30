<template>
    <div class="footer">
        <div class="footer-left">
            <div class="corsace">
                <img
                    class="logo" 
                    src="../../CorsaceAssets/img/ayim-mca/site/corsace logo.png"
                >
                <img
                    class="logo_text" 
                    src="../../CorsaceAssets/img/ayim-mca/site/corsace text.png"
                >
            </div>

            <img 
                class="dot" 
                src="../../CorsaceAssets/img/ayim-mca/site/d.png"
            >

            <div class="socials">
                <a href="https://twitter.com/vinxis1"> <img src="../../CorsaceAssets/img/ayim-mca/site/twitter.png"> </a>
                <a href="https://open.corsace.io/discord.94b52bb5.png"><img src="../../CorsaceAssets/img/ayim-mca/site/discord.png"></a>
                <a href="https://open.corsace.io/twitch.6a390bfe.png"><img src="../../CorsaceAssets/img/ayim-mca/site/ttv.png"></a>
            </div>
        </div>

        <languageSwitch />
    </div>
</template>

<script>
import languageSwitch from "./languageSwitch";

export default {
    components: {
        "languageSwitch": languageSwitch,
    },
};
</script>

<style>
.footer {
    overflow: hidden;
    background-color: #000;
    border-top-style: solid;
    border-top-color: #FFF;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 9%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
}

.footer-left {
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 1%;
}

.corsace {
    display: flex;
    align-items: center;
}

.logo {
    height: 90px;
}

.logo_text {
    height: 40px;
}

.dot_seperator {
    position: relative;
    top: 45%;
    -ms-transform: translateY(-45%);
    transform: translateY(-45%);
}

.dot {
    height: 5px;
    padding: 0 4%;
}

.socials {
    display: flex;
}

.socials img {
    height: 70px;
}
</style>