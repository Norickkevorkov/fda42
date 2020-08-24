<template>
    <v-app>
        <div class="home">
            <div class="text-center">
                <v-dialog
                        v-model="dialog"
                        width="768"
                        class="loginscreen-dialog"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                color="red success"
                                dark
                                v-bind="attrs"
                                v-on="on"
                        >
                            Логин
                        </v-btn>
                    </template>
                    <login-screen/>
                </v-dialog>
            </div>
        </div>
    </v-app>
</template>

<script>
    import LoginScreen from "../components/LoginScreen/LoginScreen";
    import {mapActions, mapState} from "vuex";

    export default {
        async created() {
            await this.isAuthorized();
            if (this.authStatus){
                await this.$router.push('/teachers-cabinet');
            }
        },
        computed: {
            ...mapState({
                authStatus: state => state.auth.authStatus,
            })
        },
        data() {
            return {
                dialog: true,
            }
        },
        methods: {
            ...mapActions(['isAuthorized'])
        },
        components: {
            LoginScreen
        }
    }
</script>
<style scoped lang="scss">
    .home {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../assets/loginscreen_bg.jpg") center center;
        background-size: cover;
        .loginscreen-dialog{
            border-bottom-left-radius: 16px;
            border-top-left-radius: 16px;
        }
    }
</style>
