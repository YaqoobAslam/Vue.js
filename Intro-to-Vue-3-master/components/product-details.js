app.component('product-detail', {

    props: {
        detail :{
            type: Array,
            required: true
        }

    },
    template:
    `
    <ul>
    <li v-for="detail in details">{{detail}}</li>
    </ul>
    `
})