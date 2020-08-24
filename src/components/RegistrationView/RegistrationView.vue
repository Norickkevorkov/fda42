<template>
    <div>
        <h2 class="text-left pt-8 pb-2">Регистрация</h2>
        <p class="to-login-screen text-left">Уже есть аккаунт? <a @click.prevent="toLoginView" href="#">Войти</a> </p>
        <v-form
                class="registration-form"
                ref="form"
                v-model="valid"
                :lazy-validation="true"
        >
            <v-radio-group v-model="radios" :mandatory="false">
                <v-radio label="Ученик" value="learner" disabled/>
                <v-radio label="Преподаватель" value="teacher"/>
                <v-radio label="Родитель" value="parent" disabled/>
            </v-radio-group>
            <v-text-field
                    class="registration-form__input"
                    v-model="phone"
                    v-mask="'+7(###)-###-##-##'"
                    :rules="phoneRules"
                    label="Введите номер телефона"
                    required
            />
            <v-btn block id="get-code-button" class="login-button mt-8" @click="submitPhone" color="success">Получить код <v-icon class="login-icon">mdi-arrow-right</v-icon></v-btn>

<!--            <v-text-field-->
<!--                    id="get-code-button"-->
<!--                    class="registration-form__input"-->
<!--                    v-model="code"-->
<!--                    v-mask="'####'"-->
<!--                    label="Введите полученный код"-->
<!--            />-->
        </v-form>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "RegistrationView",
        data: ()=>{
            return {
                valid: true,
                radios: 'teacher',
                phone: '',
                phoneRules: [
                    v => !!v || 'Номер телефона обязателен',
                    v => /^[+]7[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(v) || 'Номер телефона некорректен',
                ],
                code: '',
            }
        },
        methods:{
            ...mapActions(['getCode']),
            toLoginView(){
                this.$emit('changeScreenView', 'loginView')
            },
            submitPhone(){
                this.getCode(this.phone);
            }
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
    .to-login-screen{
        font-family: 'Rubik', sans-serif;
        font-size: 10px;
        font-weight: 500;
    }
    .registration-form{
        margin: 48px 48px 0 0;
        padding-bottom: 48px;
    }
</style>
