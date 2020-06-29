<template>
    <div class="home">
        <div class="full-size">
            <div style="display: flex"><!--idk maybe replace with style?-->
                <div class="category-buttons-group">
                    <div class="category-buttons__active"> {{ $t('mca.main.mapsetsLabel') }} </div>
                    <div class="category-buttons"> {{ $t('mca.main.mappersLabel') }} </div>
                    <div class="category-buttons"> {{ $t('mca.main.commentsLabel') }} </div>
                </div>
                <div class="mode-title-marginfix">
                    {{ selectedMode }} | {{ ('ayim') }}
                </div>
            </div>
            <div class="mode-container" :class="`mode-container--${selectedMode}`">
                <div class="mode-container__stats">
                    <div class="stat-labels">
                        <div class="stat-labels__label_main"> {{ $t('mca.main.mapsetsLabel') }} </div>
                        <div class="divider"></div>
                        <div class="stat-labels__label"> {{ $t('mca.main.recordsLabel') }} </div>
                        <div class="stat-labels__label_active"> {{ $t('mca.main.statisticsLabel') }} </div>
                    </div>
                </div>
                <div class="stat-content">
                    <div class="stat-content-display">
                        <!-- start of group/column-->
                        <div class="stat-categories-group">
                            <!-- single header -->
                            <div
                            class="stat-category"
                            :class="`stat-category--${selectedMode}`"
                            >
                                <div class="stat-ff-icon-group">
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                </div>
                                <div class="stat-category-text">
                                    {{ $t('mca.main.categories.approachRate') }}
                                </div>
                            </div>
                            <!-- close single header -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- single header -->
                            <div
                            class="stat-category"
                            :class="`stat-category--${selectedMode}`"
                            >
                                <div class="stat-ff-icon-group">
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                </div>
                                <div class="stat-category-text">
                                    {{ $t('mca.main.categories.approachRate') }}
                                </div>
                            </div>
                            <!-- close single header -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                        </div>
                        <!-- end of group -->
                        <!-- start of group/column-->
                        <div class="stat-categories-group">
                            <!-- single header -->
                            <div
                            class="stat-category"
                            :class="`stat-category--${selectedMode}`"
                            >
                                <div class="stat-ff-icon-group">
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                </div>
                                <div class="stat-category-text">
                                    {{ $t('mca.main.categories.approachRate') }}
                                </div>
                            </div>
                            <!-- close single header -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- single header -->
                            <div
                            class="stat-category"
                            :class="`stat-category--${selectedMode}`"
                            >
                                <div class="stat-ff-icon-group">
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                </div>
                                <div class="stat-category-text">
                                    {{ $t('mca.main.categories.approachRate') }}
                                </div>
                            </div>
                            <!-- close single header -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                        </div>
                        <!-- end of group -->
                        <!-- start of group/column-->
                        <div class="stat-categories-group">
                            <!-- single header -->
                            <div
                            class="stat-category"
                            :class="`stat-category--${selectedMode}`"
                            >
                                <div class="stat-ff-icon-group">
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                </div>
                                <div class="stat-category-text">
                                    {{ $t('mca.main.categories.approachRate') }}
                                </div>
                            </div>
                            <!-- close single header -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- single header -->
                            <div
                            class="stat-category"
                            :class="`stat-category--${selectedMode}`"
                            >
                                <div class="stat-ff-icon-group">
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                    <div class="stat-ff-icon"
                                    :class="`stat-ff-icon--${selectedMode}`"
                                    />
                                </div>
                                <div class="stat-category-text">
                                    {{ $t('mca.main.categories.approachRate') }}
                                </div>
                            </div>
                            <!-- close single header -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                            <!-- start banner -->
                            <div
                            class="stat-map-banner"
                            :class="`stat-map-banner--${selectedMode}`"
                            >
                            <div>number of maps with <br> <b>AR10</b> <br><br></div> <div class="stat-count">9</div>
                            </div>
                            <!-- close banner -->
                        </div>
                        <!-- end of group -->
                    </div>
                </div>
                <div class="mode-selection" :class="`mode-selection--${selectedMode}`">
                    <nuxt-link
                        v-for="mode in modes"
                        :key="mode"                        
                        :to="`/${mode}-stats`"
                        class="mode-selection__mode"
                        :class="[`mode-selection__mode--${mode}`, (selectedMode == mode) ? `mode-selection__mode--${mode}-selected` : '']"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
    validate ({ params }) {
        return !params.mode || /^(standard|taiko|fruits|mania|storyboard)$/.test(params.mode);
    },
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
            startDate: new Date("2020-05-01"),
            selectedMode: "",
            modes: ["standard", "taiko", "fruits", "mania", "storyboard"],
        };
    },
    mounted () {
        this.selectedMode = this.$route.params.mode || "standard";
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
$modes: "storyboard", "mania" , "fruits", "taiko", "standard";

.full-size {
    padding-left: 20px;
    flex: 0 0 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

%half-box {
    border-radius: 15px; 
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 5px 20px;
    display: flex;
    flex: 1 1 100%;
    
    @media (min-width: 1200px) {
        flex-wrap: nowrap;
        flex: 1 1 100%;
    }
}

.mode-title-marginfix {
    font-family: 'Lexend Peta';
    font-size: 2rem;
    text-shadow: 0 0 4px white;
    margin: 3% 25px 10px auto;
}

.category-buttons-group{
    padding-top: 30px;
    display: flex;
}

.category-buttons{
    padding: 10px 30px;
    margin: 0px 20px;
    display: flex;
    border-radius: 15px; 
    background-color: rgba(0, 0, 0, 0.7); 
    align-items: center;
    max-height: 50px;
    font-family: 'Lexend Peta';
    font-size: 1.5rem;
    text-shadow: 0px 0px 10px white;

    &__active {
    padding: 10px 30px;
    margin: 0px 20px;
    display: flex;
    border-radius: 15px; 
    background-color: #ffffff;
    box-shadow: 0px 1px 6.5px 0 rgba(255, 255, 255, 0.63);
    align-items: center;
    max-height: 50px;
    font-family: 'Lexend Peta';
    font-size: 1.5rem;
    color: #fb2475;
    }
}

.divider {
        border-left: 1px solid white;
        display: inline-block;
        height: 2.2rem;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: 0px 0px 10px 0 rgba(255, 255, 255, 0.63);
}

.stat-labels {
    @extend %half-box;
    align-items: center;
    margin-bottom: 10px;

    &__content {
        font-family: Scoreboard;
        font-size: 2.6rem
    }

    &__label{
        font-family: 'Red Hat Display';
        letter-spacing: 1px;
        margin: 10px;
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.53);
        margin-right: 20%;
        margin-left: 20%;
    }

    &__label_main {
        font-family: 'Red Hat Display';
        letter-spacing: 1px;
        margin: 10px;
        font-size: 1.4rem;
        text-shadow: 0px 0px 10px white;
    }

    &__label_active {
        font-family: 'Red Hat Display';
        letter-spacing: 1px;
        margin: 10px;
        font-size: 1.4rem;
        text-shadow: 0px 0px 10px white;
        margin-right: 20%;
        margin-left: 20%;
    }

    @media (min-width: 1200px) {
        margin-right: 10px;
        margin-bottom: 0px;
    }
}

.stat-content {
    margin-bottom: 10px;
    width: 99%;
    max-height: 50vh;
    min-height: 50vh;
    overflow-y: scroll;
}

.stat-count {
    font-family: Scoreboard;
    font-size: 5.5rem;
    padding-left: 50%;
    padding-top: 5%;
}

@mixin stat-category-color {
    @each $mode in $modes {
        &--#{$mode} {
            background: linear-gradient(125deg,rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 15%, var(--#{$mode}) 15%, var(--#{$mode}) 16%, rgba(0, 0, 0, 0.7) 16%, rgba(0, 0, 0, 0.7) 17.5%, var(--#{$mode}) 17.5%, var(--#{$mode}) 18.8%, rgba(0, 0, 0, 0.7) 18.5%, rgba(0, 0, 0, 0.7) 100%);
        }
    }
}

@mixin stat-ff-icon-color {
    @each $mode in $modes {
        &--#{$mode} {
            border-color: transparent transparent transparent var(--#{$mode});
        }
    }
}

.stat-ff-icon {
    width: 0.5rem;
    height: 0.4rem;
    border-style: solid;
    box-sizing: border-box;
    border-width: 0.5rem;
    border-width: 0.4rem 0px 0.4rem 0.5rem;
    @include stat-ff-icon-color;
}

.stat-ff-icon-group {
    display: flex;;
    justify-content: left;
}

.stat-category-text {
    margin-left: 17%;
}

.stat-categories-group {
    display: flex;
    flex: 0 0 33%;
    flex-direction: column;
    padding-right: 10px;
}

.stat-map-banner {
    border-radius: 15px; 
    background-image: url("https://assets.ppy.sh/beatmaps/582089/covers/cover.jpg?1521160528");
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 10px 20px;
    display: flex;
    flex: 1 1 25%;
    width: 100%;
    min-height: 150px;
    font-size: 1.3rem;
    justify-content: left;
    letter-spacing: 2.52px;
    align-items: center;
    text-shadow: 0px 0px 10px white;
    font-family: 'Red Hat Display';
    letter-spacing: 1.2px;
    margin-bottom: 10px;

    span {
        margin-left: 15px
    }
}

.stat-content-display {
    display: flex;
    justify-content: left;
}

.stat-category {
    border-radius: 15px; 
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 10px 20px;
    display: flex;
    flex: 1 1 25%;
    width: 100%;
    font-size: 1.3rem;
    justify-content: left;
    letter-spacing: 2.52px;
    align-items: center;
    text-shadow: 0px 0px 10px white;
    font-family: 'Red Hat Display';
    letter-spacing: 1.2px;
    margin-bottom: 10px;

    span {
        margin-left: 15px
    }

    @include stat-category-color;
}

@media (min-width: 992px) {    
        .fullsize {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

</style>