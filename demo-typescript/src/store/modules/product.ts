import * as types from '../mutation-type'
import { ActionContextBasic, Product, AddToCartPayLoad } from '../index'
import shop from '../../api/shop'
export interface ProductPayload {
    products: Product[]
}

export interface State {
    all: Product[]
}

const initState = {
    all: [],
}
const getters = {
    allProducts: (state: State) => state.all
}

const actions = {
    getAllProducts(context: ActionContextBasic){
        shop.getProducts((products: Product[]) => {
            const payload: ProductPayload = {
                products
            }
            context.commit(types.RECEIVE_PRODUCTS, payload)
            console.log('product:ssss', payload)
        })
        
    }
}

const mutations = {
    [types.RECEIVE_PRODUCTS](state: State, payload: ProductPayload){
        state.all = payload.products
        console.log('state:ssssss', state)
    },
    [types.ADD_TO_CART](state: State, payload: AddToCartPayLoad){
        console.log("add to cart in product module", payload.id)
        const product = state.all.find((p) => p.id === payload.id)
        if(product) {
            product.inventory--
        }
    }

}

export default {
    state: initState,
    getters,
    actions,
    mutations,
}