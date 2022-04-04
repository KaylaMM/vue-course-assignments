const app = Vue.createApp({
    data() {
        return {
            userName: 'Kayla Martinez',
            userAge: 32,
            photo: 'https://cdn.mos.cms.futurecdn.net/Ks6KtG9fx9soz6ddidT9iY.jpg'
        }
    },
    methods: {
         agePlusFive(){
             return this.userAge + 5
         },
         randomNumber(){
             return Math.random
         }
    }
})

app.mount('#assignment');

