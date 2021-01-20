app.component('product-display', {

    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
  template: 
    /*html*/ 
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{shipping}}</p>
          <ul>
          <li v-for="detail in details">{{detail}}</li>
          </ul>

          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>

         <button 
          class="button" 
          :class="{disabledButton: !inStock}"
           v-on:click="removeFromCart">
          Remove from Cart
           </button>
        </div>
      </div>
      <review-list  v-if="reviews.length"  :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
   </div>`,




      data(){

         return {
            product: 'Socks',
            brand: 'Vue Mastry',
            //title (computed property is using as title)
            //inStock (computer property is using as inStock)
            //image (computed property is using as image)

            // url: 'https://v3.vuejs.org/',
            // image:'./assets/images/socks_green.jpg',
            // inStock: true,
            // inventory: 90,

            SelectedVariant: 0,
            // onSale: true,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id:2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
           ],
            sizes: ['Small','Medium', 'Large', 'Extra-Large'],
            reviews: []
        
        }
    },


    methods: {
        addToCart(){
           // this.cart +=1
            this.$emit('add-to-cart', this.variants[this.SelectedVariant].id)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.SelectedVariant].id)
        },
        updateVariant(index){
            this.SelectedVariant = index
            // console.log(index);
        },
        SubtractFromCart(){
            this.cart -=1
        },
        addReview(review){  
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },

        image(){
            return this.variants[this.SelectedVariant].image
        },

        inStock(){
            return this.variants[this.SelectedVariant].quantity
        },
        onSale(){
            return this.brand +  ' '  +  this.product
        },

       shipping(){
           //if user is premium

            if(this.premium){
                return 'Free'
            }
            //Ohterwise charges
                return 2.99
       }
    }
})
