const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            belowResult: 'Not there yet',
            exactResult: 37,
            aboveResult: 'Too much!'
        }
    },
    computed: {
        result(){
            if(this.counter < this.exactResult) {
                return this.belowResult
            } else if (this.counter === this.exactResult) {
                return this.exactResult
            } else {
                return this.aboveResult
            }
    
        },
    },
    watch:{
        result(){
            console.log('Watcher executing...');
            const that = this;
            setTimeout(function(){
                that.counter = 0
            }, 5000)
        }
    },
    methods: {
        add(num){
            this.counter = this.counter + num
        }
    }
})

app.mount('#assignment')