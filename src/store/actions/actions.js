import * as actionTypes from './actionTypes';


export const addFoodToCart = (meal) => {
  return {
    type: actionTypes.ADD_FOOD_TO_CART,
    meal,
  }
}

export const increaseQuantity = (meal) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    meal,
  }
}

export const reduceQuantity = (meal) => {
  return {
    type: actionTypes.REDUCE_QUANTITY,
    meal,
  }
}

export const removeMeal = (meal) => {
  return {
    type: actionTypes.REMOVE_MEAL,
    meal,
  }
}
