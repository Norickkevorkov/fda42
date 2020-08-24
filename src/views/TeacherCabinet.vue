<template>
    <v-app>
        <v-navigation-drawer app>
            <!-- -->
        </v-navigation-drawer>

        <Header/>

            <!-- Sizes your content based upon application components -->
            <v-main>

                <!-- Provides the application the proper gutter -->
                <v-container fluid>

                    <!-- If using vue-router -->
                    <router-view/>
                </v-container>
            </v-main>

            <v-footer app>
                <!-- -->
            </v-footer>
    </v-app>
</template>

<script>
    import Header from '../components/Header/Header';

    export default {
        data() {
            return {
                drawer: false,
            }
        },
        components: {
            Header,
        },
        name: "TeacherCabinet"
    }
</script>

<style scoped>

</style>
