
const App = {
    data() {
        return {
            placeHolderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Zamerka 1', 'Zametka 2']
        }
    },
    methods: {

        addNewNote() {
            if (this.inputValue) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }

        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(i) {
            this.notes.splice(i, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2

        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log(value)
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')
Vue.createApp(App).mount('#app')