const app = Vue.createApp({
    
    // template: '<h1> Hi I am Yaqoob</h1>'
    data(){
        return{


            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            
            books: [
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/1.jpg', isFav: true},
                { title: 'saleforce', author: 'Mike', img: 'assets/2.jpg', isFav: false},
                { title: 'CP', author: 'Robot', img: 'assets/3.jpg', isFav: true},
            ]
        
         }
    },
    methods: {
        toggleShowBooks(){
            // this.showBooks = false
            this.showBooks = !this.showBooks
       },
       toggleFav(book){
           book.isFav = !book.isFav
       }
   },
    computed: {
        filteredBooks(){
           return this.books.filter((book) => book.isFav)
        }
    }   
})


app.mount('#app')





