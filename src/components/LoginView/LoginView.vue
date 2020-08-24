<template>
    <div>
        <h2 class="text-left pt-8 pb-2">Войти</h2>
        <p class="to-reg-screen text-left">Нет аккаунта? <a @click.prevent="toRegistrationView" href="#">Зарегистрироваться</a> </p>
        <v-form
                class="login-form"
                ref="form"
                v-model="valid"
                :lazy-validation="true"
        >
            <v-text-field
                    class="login-form__input"
                    v-model="email"
                    :rules="emailRules"
                    label="Введите E-mail"
                    required
            />
            <v-text-field
                    class="login-form__input"
                    v-model="password"
                    :rules="passwordRules"
                    label="Введите пароль"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    :type="showPassword ? 'text' : 'password'"
                    required
            />
            <v-btn block class="login-button mt-8" @click="submit" color="success">Войти <v-icon class="login-icon">mdi-arrow-right</v-icon></v-btn>
            <v-btn block color="error" class="mt-4" text>Отмена</v-btn>

            <div class="socials-block">
                <p class="text-left">Или войдите с помощью аккаунта соц. сетей</p>
                <div class="social-buttons">
                    <SocialMediaButton :type="'facebook'"/>
                    <SocialMediaButton :type="'google'"/>
                    <SocialMediaButton :type="'vk'"/>
                </div>

            </div>
        </v-form>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
    export default {
        name: "LoginView.vue",
        data: ()=>{
            return {
                email: '',
                valid: true,
                showPassword: false,
                emailRules: [
                    v => !!v || 'E-mail обязателен',
                    v => /.+@.+\..+/.test(v) || 'E-mail некорректен',
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Пароль обязателен',
                    v => (v && v.length >= 6) || 'Пароль содержит менее 6 символов',
                    // v => /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(v) || 'Пароль некорректен',
                ],
            }
        },
        methods: {
            ...mapActions(['login']),
            validate() {
                this.$refs.form.validate()
            },
            toRegistrationView(){
                this.$emit('changeScreenView','registrationView')
            },
            submit() {
                this.$refs.form.validate();
                if (this.valid){
                    this.login({email: this.email, password: this.password});
                }
            },
        },
        components: {
            SocialMediaButton
        }
    }
</script>
<style lang="scss" scoped>
    h2{
        font-family: 'Inter', sans-serif;
        font-weight: 100;
        font-size: 48px;
        color: #173260;
    }
    .login-button{
        .login-icon{
            transition: margin-left ease-in 300ms 100ms;
        }
        &:hover{
            .login-icon{
                margin-left: 16px;
            }
        }

    }
    .to-reg-screen{
        font-family: 'Rubik', sans-serif;
        font-size: 10px;
        font-weight: 500;
    }
    .login-form{
        margin: 48px 48px 0 0;
        padding-bottom: 48px;

    }
    .socials-block{
        margin-top: 24px;
        p{
            font-family: 'Rubik', sans-serif;
            font-size: 10px;
            font-weight: 500;
        }
        .social-buttons{
            display: flex;
            justify-content: space-around;
        }
    }
</style>

