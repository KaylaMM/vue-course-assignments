const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''
        }
    },
    methods: {
        showAlert(){
            alert('Success!');
        },
        saveInput(event) {
            this.userInput = event.target.value;
        },
        confirmedInput(){
            this.confirmedInput = this.userInput
        }
    },

})

app.mount('#assignment')