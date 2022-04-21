const app = Vue.createApp({
    data() {
      return { 
        enteredTaskValue: '',
        tasks: [],
        taskListVisible: true 
      };
    },
    computed: {
        buttonCaption() {
            return this.taskListVisible ? 'Hide List' : 'Show List'
        }
        
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTaskValue);
      },
      toggleTaskList() {
          this.taskListVisible = !this.taskListVisible
      }
    }
  });
  
  app.mount('#assignment');
   