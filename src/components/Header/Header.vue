<template>
    <v-card class="overflow-hidden">
        <v-app-bar
                absolute
                color="#317410e0"
                dark
                shrink-on-scroll
                prominent
                :src="backgroundUrl"
                fade-img-on-scroll
                scroll-target="#scrolling-techniques-5"
                scroll-threshold="500"
        >
            <template v-slot:img="{ props }">
                <v-img
                        v-bind="props"
                        gradient="to top right, rgba(62, 30, 137, 0.82), rgba(99, 225, 81, 0.7)"
                />
            </template>

            <v-app-bar-nav-icon/>

            <v-toolbar-title><img class="main-logo" :src="logo" alt="RemEduPlat - ондайн-платформа для обучения"></v-toolbar-title>

            <v-spacer/>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon @click="signOut">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-sheet
                id="scrolling-techniques-5"
                class="overflow-y-auto"
                max-height="900"
        >
            <v-container style="min-height: 150vh;"/>
        </v-sheet>
    </v-card>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
        name: "Header",
        data(){
            return{
                backgroundUrl: require('../../assets/school-dashboard.jpg'),
                logo: require('../../assets/logo.png')
            }
        },
        methods: {
            ...mapActions(["logout"]),
            async signOut(){
                console.log(this);
                await this.logout();
            }
        }
    }
</script>

<style scoped lang="scss">
    .main-logo{
        position: absolute;
        bottom: 8px;
        left: 148px;
        width: 152px;
    }
</style>
