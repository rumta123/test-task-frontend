const app = Vue.createApp({
    el: '#demo',
    data() {
        return {
            clicked: false,
            items: [
                {
                    "id": 1,
                    "name": "Shoes 1"
                },
                {
                    "id": 2,
                    "name": "Shoes 2"
                },
                {
                    "id": 3,
                    "name": "Shoes 3"
                },
                {
                    "id": 4,
                    "name": "Shoes 4"
                },
                {
                    "id": 5,
                    "name": "T-shirt 1"
                },
                {
                    "id": 6,
                    "name": "T-shirt 2"
                },
                {
                    "id": 7,
                    "name": "T-shirt 3"
                },
                {
                    "id": 8,
                    "name": "T-shirt 4"
                }
            ],
            users: [
                {
                    "id": 11,
                    "name": "Jacket 1"
                },
                {
                    "id": 12,
                    "name": "Jacket 2"
                },
                {
                    "id": 13,
                    "name": "Jacket 3"
                },
                {
                    "id": 14,
                    "name": "Jacket 4"
                },
                {
                    "id": 15,
                    "name": "Hoodie 1"
                },
                {
                    "id": 16,
                    "name": "Hoodie 2"
                },
                {
                    "id": 17,
                    "name": "Hoodie 3"
                },
                {
                    "id": 18,
                    "name": "Hoodie 4"
                }
            ],
            newItems: [],

            newUsers: [],

        }

    },
    mounted() {

    },
    watch: {


    },

    methods: {
        addLeft: function (id) {
            if (this.newItems.length !==6){    const names = this.items.map(el => el.id);
            const index = names.indexOf(id)
            this.newItems.push(this.items[index])
            this.items = this.items.filter(item => item.id !== id)}
            else {
                alert ("больше нельзя добавить")
            }
        
            
        },
        addRight: function (id) {
            this.newUsers = []
            const ids = this.users.map(el => el.id);
            const index = ids.indexOf(id)
            // console.log(index)
            this.newUsers.push(this.users[index])
            console.log(this.newUsers)
            // this.users = this.users.filter(item => item.id !== id)


        }
    },
    createNote() {


    },
    remove() {

    },


    computed: {


    },

})
app.mount('#app')
