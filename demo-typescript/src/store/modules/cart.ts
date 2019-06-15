import { Commit } from 'vuex'
import shop from '../../api/shop'
import * as types from '../mutation-type'
import { CartProduct, CheckoutStatus, AddToCartPayLoad } from '../index'


interface Shape {
    id: number
    quantity: number
}

interface CheckoutFailurePayload {
    savedCartItems: Shape[]
}

export interface State {
    added: Shape[]
    checkoutStatus: CheckoutStatus
}

const initState: State ={
    added: [],
    checkoutStatus: null,
}
const getters = {
    checkoutStatus: (state: State) => state.checkoutStatus
}

const actions = {
    checkout(context: { commit: Commit, state: State }, product: CartProduct[]){
        const failurePayload: CheckoutFailurePayload = {
            savedCartItems: [...context.state.added],
        }
        context.commit(types.CHECKOUT_REQUEST)
        shop.buyProducts(
            product,
            () => context.commit(types.CHECKOUT_SUCCESS),
            () => context.commit(types.CHECKOUT_FAILURE, failurePayload),
        )
    }
}

const mutations = {
    [types.ADD_TO_CART](state: State, payload: AddToCartPayLoad){
        console.log("add to cart in cart modulesssssss", payload.id)
        state.checkoutStatus = null
        const record = state.added.find((p) => p.id === payload.id)
        console.log("record", record)
        if(!record) {
            state.added.push({
                id: payload.id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    [types.CHECKOUT_REQUEST](state: State) {
        // clear cart
        state.added = []
        state.checkoutStatus = null
      },
    
      [types.CHECKOUT_SUCCESS](state: State) {
        state.checkoutStatus = 'successful'
      },
    
      [types.CHECKOUT_FAILURE](state: State, payload: CheckoutFailurePayload) {
        // rollback to the cart saved before sending the request
        state.added = payload.savedCartItems
        state.checkoutStatus = 'failed'
      },
}

export default {
    state: initState,
    getters,
    actions,
    mutations
}