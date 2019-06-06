import Vue from 'vue'
import Vuex from 'vuex'
import { all } from 'q';

Vue.use(Vuex)
const Uri = 'https://c0rs.herokuapp.com/https://www.datakick.org/api/items'

export default new Vuex.Store({
  state: {
    cart: [],
    products: []
  },
  mutations: {
    addProduct({ products }, product){
      console.log('add product', products)
      products.push(product)
    },
    addToCart({cart}, product){
      cart.push(product)
    },
    removeItem({cart}, product){
      const index =  cart.findIndex(item => item.id === product.id)
      cart.splice(index, 1)
    },
    clearCart({cart}){
      cart.splice(all)
    }
  },
  actions: {
    fetchProducts({commit, getters}){
      fetch(Uri)
          .then(res => res.json())
          .then(data =>{
            console.log('fetch product')
            console.log("data: ", data)
            const dataproduct = data.slice(30)
            dataproduct.forEach(product =>{
              if(!getters.brandName.includes(product.brand_name) && product.size)
              {
                console.log("xxx-------", product)
                commit('addProduct', {
                  brand_name: product.brand_name,
                  name: product.name,
                  id: product.gtin14,
                  price: Math.floor(Math.random() * (100 - 1 + 1)) + 1
                })
              }
            })
          })
          console.log('products-------------', this.products)
    }
  },
getters: {
  brandName: state => state.products.map(product => product.brand_name),
  totalAmount: state => {
    let amount = 0
    state.cart.forEach(item => (amount += item.price))
    return amount
  }
}
})
