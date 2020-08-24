import firebase from "@/plugins/firebase";

export default {
    actions: {
        async login({commit}, {email, password}) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password);
                console.log(response);
                commit('setAuthStatus', true);
                commit('setEmail',response.user.email)

            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        async isAuthorized({commit}){
            try {
                const authStatus = await firebase.auth().currentUser;
                commit('setAuthStatus', !!authStatus);
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        async logout({commit}){
            try {
                const response = await firebase.auth().signOut();
                commit('logout', response);
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        async getCode({commit}, phoneNumber){
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('get-code-button', {
                'size': 'invisible',
                'callback': function(response) {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    console.log(response);
                    debugger;
                }
            });
            try {
                window.confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier);
                console.log(window.confirmationResult);
            } catch (e){
                console.log(e);
                throw e;
            }

        }
    },
    mutations: {
        setAuthStatus(state, payload){
            state.authStatus = payload;
        },
        setEmail(state, payload){
            state.email = payload;
        },
        changeNewUserStatus(state){
            state.isNewUser = false;
        },
        logout(state, payload){
            console.log(state);
            console.log(payload);
        }
    },
    state: {
        authStatus: false,
        email: '',
        isNewUser: false,
    }
}
