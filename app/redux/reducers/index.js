import {combineReducers} from 'redux'
import {ADD_CART, ADD_WAREHOUSE, DECREASE_QUANTITY, DECREASE_QUANTITY_WAREHOUSE, DELETE_CART, DELETE_WAREHOUSE, GET_NUMBER_CART, GET_NUMBER_WAREHOUSE, INCREASE_QUANTITY, INCREASE_QUANTITY_WAREHOUSE} from '../actions'

const initProduct = {
  numberCart: 0,
  Carts: [],
}

const initWarehouse = {
  numberWarehouse: 0,
  Carts: [],
}

const todoProduct = (state = initProduct, action) => {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      }
    case ADD_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.title,
          image: action.payload.thumbnail,
          price: action.payload.price,
        }
        state.Carts.push(cart)
      } else {
        let check = false
        state.Carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Carts[key].quantity++
            check = true
          }
        })
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.title,
            image: action.payload.thumbnail,
            price: action.payload.price,
          }
          state.Carts.push(_cart)
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1
      }
    case INCREASE_QUANTITY:
      state.numberCart++
      state.Carts[action.payload].quantity++
      return {
        ...state,
      }
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity
      if (quantity > 1) {
        state.numberCart--
        state.Carts[action.payload].quantity--
      }
      return {
        ...state,
      }
    case DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => item.id !== state.Carts[action.payload].id),
      }
    default:
      return state
  }
}

const todoWarehouse = (state = initWarehouse, action) => {
  switch (action.type) {
    case GET_NUMBER_WAREHOUSE:
      return {
        ...state,
      }
    case ADD_WAREHOUSE:
      if (state.numberWarehouse === 0) {
        let cart = {
          id: action.payload.id,
          quantity: action.payload.quantity || 1,
          name: action.payload.title,
          price: action.payload.price,
        }
        state.Carts.push(cart)
      } else {
        let check = false
        state.Carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Carts[key].quantity++
            check = true
          }
        })
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: action.payload.quantity || 1,
            name: action.payload.title,
            price: action.payload.price,
          }
          state.Carts.push(_cart)
        }
      }
      return {
        ...state,
        numberWarehouse: state.numberWarehouse + (Number(action.payload.quantity) || 1)
      }
    case INCREASE_QUANTITY_WAREHOUSE:
      state.numberWarehouse++
      state.Carts[action.payload].quantity++
      return {
        ...state,
      }
    case DECREASE_QUANTITY_WAREHOUSE:
      let quantity = state.Carts[action.payload].quantity
      if (quantity > 1) {
        state.numberWarehouse--
        state.Carts[action.payload].quantity--
      }
      return {
        ...state,
      }
    case DELETE_WAREHOUSE:
      let quantity_ = state.Carts[action.payload].quantity
      return {
        ...state,
        numberWarehouse: state.numberWarehouse - quantity_,
        Carts: state.Carts.filter(item => item.id !== state.Carts[action.payload].id),
      }
    default:
      return state
  }
}

const ShopApp = combineReducers({
  _todoProduct: todoProduct,
  _todoWarehouse: todoWarehouse,
})

export default ShopApp