<template>
    <div class="footer">
        <div class="footer_left">
            <div class="footer_corsace">
                <img
                    class="footer_logo" 
                    src="../../CorsaceAssets/img/ayim-mca/site/corsace logo.png"
                >
                <img
                    class="footer_logoText" 
                    src="../../CorsaceAssets/img/ayim-mca/site/corsace text.png"
                >
            </div>

            <img 
                class="footer_dot" 
                src="../../CorsaceAssets/img/ayim-mca/site/d.png"
            >

            <div class="footer_socials">
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

<style lang="scss">
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

.footer_left {
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 1%;
}

.footer_corsace {
    display: flex;
    align-items: center;
}

.footer_logo {
    height: 90px;
}

.footer_logoText {
    height: 40px;
}

.footer_dot {
    height: 5px;
    padding: 0 4%;
}

.footer_socials {
    display: flex;
    img {
        height: 70px;
    }
}
</style>