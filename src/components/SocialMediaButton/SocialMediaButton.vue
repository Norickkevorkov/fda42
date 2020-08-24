<template>
    <v-btn color="primary" rounded>
        <v-icon>{{getCurrentIcon()}}</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "SocialMediaButton",
        props: ['type'],
        methods: {
            getCurrentIcon(){
                switch (this.type) {
                    case 'facebook': return 'mdi-facebook';
                    case 'google': return 'mdi-google';
                    case 'vk': return 'mdi-vk';
                    default: return '';

                }
            }
        }
    }
</script>

<style scoped>

</style>
