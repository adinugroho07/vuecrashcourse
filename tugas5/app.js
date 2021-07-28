const app = Vue.createApp({
    data() {
        return {
            task: '',
            taskList: [],
            tblID: 0,
        }
    },
    methods: {
        addTask() {

            tempObj = {
                id: this.taskList.length + 1,
                hide: true,
                value: this.task
            }
            this.taskList.push(tempObj);
        },
        hideOrShow() {
            this.taskList.forEach((result) => {
                if (result.id == this.tblID) {
                    result.hide = !result.hide;
                }
            })
        }
    },
});
app.mount('#assignment');