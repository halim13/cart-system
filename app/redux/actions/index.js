export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const GET_NUMBER_CART = 'GET_NUMBER_CART'
export const ADD_CART = 'ADD_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_CART = 'DELETE_CART'

export const INCREASE_QUANTITY_WAREHOUSE = 'INCREASE_QUANTITY_WAREHOUSE'
export const DECREASE_QUANTITY_WAREHOUSE = 'DECREASE_QUANTITY_WAREHOUSE'
export const GET_NUMBER_WAREHOUSE = 'GET_NUMBER_WAREHOUSE'
export const ADD_WAREHOUSE = 'ADD_WAREHOUSE'
export const UPDATE_WAREHOUSE = 'UPDATE_WAREHOUSE'
export const DELETE_WAREHOUSE = 'DELETE_WAREHOUSE'

// GET NUMBER CART
export const GetNumberCart = () => ({
  type: GET_NUMBER_CART,
})

export const AddCart = payload => ({
  type: ADD_CART,
  payload,
})

export const UpdateCart = payload => ({
  type: UPDATE_CART,
  payload,
})

export const DeleteCart = payload => ({
  type: DELETE_CART,
  payload,
})

export const IncreaseQuantity = payload => ({
  type: INCREASE_QUANTITY,
  payload,
})

export const DecreaseQuantity = payload => ({
  type: DECREASE_QUANTITY,
  payload,
})

// GET NUMBER WAREHOUSE
export const GetNumberWarehouse = () => ({
  type: GET_NUMBER_WAREHOUSE,
})

export const AddWarehouse = payload => ({
  type: ADD_WAREHOUSE,
  payload,
})

export const UpdateWarehouse = payload => ({
  type: UPDATE_WAREHOUSE,
  payload,
})

export const DeleteWarehouse = payload => ({
  type: DELETE_WAREHOUSE,
  payload,
})

export const IncreaseQuantityWarehouse = payload => ({
  type: INCREASE_QUANTITY_WAREHOUSE,
  payload,
})

export const DecreaseQuantityWarehouse = payload => ({
  type: DECREASE_QUANTITY_WAREHOUSE,
  payload,
})