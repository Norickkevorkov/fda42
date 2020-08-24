<template>
    <div class="login-screen">
        <div class="login-image">
            <img :src="getLoginImage()" alt="">
        </div>
        <v-card
                style="max-width: 392px; width: 100%;"
                class="pl-8 auth-view"
                v-show="currentView === 'loginView'"
        >
            <LoginView @changeScreenView="changeCurrentView"/>
        </v-card>
        <v-card
                style="max-width: 392px; width: 100%;"
                class="pl-8 auth-view"
                v-show="currentView === 'registrationView'"
        >
            <RegistrationView @changeScreenView="changeCurrentView"/>
        </v-card>
    </div>

</template>
<script>
    import LoginView from "../LoginView/LoginView";
    import RegistrationView from "../RegistrationView/RegistrationView";
    export default {
        data: () => ({
            currentView: 'loginView',
        }),
        methods: {
            getLoginImage(){
                return require('../../assets/loginscreen-img.jpg')
            },
            changeCurrentView(newView){
                this.currentView = newView;
            },
        },
        components:{
            LoginView,
            RegistrationView,
        }
    }
</script>
<style scoped lang="scss">
    .login-screen{
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 768px;
        background-color: #fff;
    }
    .login-image{
        max-width: 392px;
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
