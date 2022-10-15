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
            mystr:[],
            my:0
        }

    },
    mounted() {

    },
    watch: {


    },

    methods: {
        add1: function (id) {
            //  this.newItems.push(this.items[id - 1])
            // this.items = this.items.filter(item => item.id !== id)
            //  this.items = this.items.filter(item => item.id !== id)
            //   this.items.splice(id-1, 1)

        //  this.newItems.push(this.items[id-1])
     //     this.mystr = this.items.filter(item => item.id == id )
         // let index = this.items.map(el => el.name).indexOf(id);
          
         this.items =console.log(...this.items)
        // this.my = _.findIndex(this.items, this.mystr)
        // console.log(this.my)
         

        },
        addRight: function (id) {
            this.newUsers.push(this.users.indexOf(id))


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
