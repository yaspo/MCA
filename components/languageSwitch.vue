<template>
    <div class="locale">
        <div 
            class="locale_current" 
            @click="change = !change"
        >
            <img 
                :src="$t('flag')"
                class="locale_flag"
            >
            <div class="locale_text">
                {{ $i18n.locale.toUpperCase() }}
            </div>
        </div>
        <div 
            v-if="change"
            class="locale_selector"
        >
            test
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data () {
        return {
            change: false,
        };
    },
});
</script>

<style lang="scss">
.locale {
    color: #cccccc;
    padding-right: 1%;
}

.locale_current {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.locale_flag {
    height: 25px;
    padding-right: 10px;
}

.locale_text {
    font-size: 20px;
}

.locale_selector {

}
</style>