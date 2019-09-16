import * as actionTypes from '../actions/actionTypes';
import { increase } from '../utility';


const calculateSubTotal =  (quantity, price) => {
  return quantity * price;
}

const inititalState = {
  orders: [],
  totalPrice: 0,
}



const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FOOD_TO_CART:
        console.log('add to cart', state)
      // addFoodCartHandler = (meal) => {
      // copying the old state
      let newState = Object.assign({}, state)
  
      // making the new order state
      const foundMeal = newState.orders.find(order => order.id === action.meal.id)
      if (foundMeal) {
        newState.orders.map((order) => {
          if (order.id === action.meal.id) {
            order.quantity += 1;
          }
        });
      } else {
        newState.orders.push(action.meal);        
      }
  
      // getting the total sum of orders
      const updatedTotalPrice = Object.values(newState.orders).map((order) => {
        return (order.quantity * order.price)
      }).reduce ((sum, currVal) => {
        return sum + currVal;
      }, 0);
      
      // update the total price state
      newState.totalPrice = updatedTotalPrice;
      return newState;
    // }
    
    case actionTypes.INCREASE_QUANTITY:
      console.log('increse quantity', state)
      // copy the old state
      let newpState = Object.assign({}, state);
      
      // find the meal and inccrease it's quantity
      newpState.orders.map((order, index) => {
        if (order.id === action.meal.id) {
          order.quantity += 1;
          // newpState.orders[index] = action.meal;
        }
      });
  
      // getting the total sum of orders
      const newPrice = newpState.orders.map((order) => {
        return (order.quantity * order.price)
      }).reduce ((sum, currVal) => {
        return sum + currVal;
      }, 0);      
      
      // update the total price state
      newpState.totalPrice = newPrice;

      return newpState;
      

    case actionTypes.REDUCE_QUANTITY:
        console.log('reduce quantity', state)
        // copy the old state
        let newdState = Object.assign({}, state);
        
        // find the meal and inccrease it's quantity
        newdState.orders.map((order, index) => {
          if (order.id === action.meal.id) {
            order.quantity -= 1;
            // newpState.orders[index] = action.meal;
          }
        });
    
        // getting the total sum of orders
        const newdPrice = newdState.orders.map((order) => {
          return (order.quantity * order.price)
        }).reduce ((sum, currVal) => {
          return sum + currVal;
        }, 0);      
        
        // update the total price state
        newdState.totalPrice = newdPrice;
  
        return newdState;  

      case actionTypes.REMOVE_MEAL:
          console.log('delete meal', state)
          // copy the old state
          let neweState = Object.assign({}, state);
          
          // remove the found meal
          const orderIndex = neweState.orders.findIndex(order => order.id === action.meal.id);

          // updating the quantity back to 1
          neweState.orders[orderIndex].quantity = 1;

          neweState.orders.splice(orderIndex, 1)
                          
          // getting the total sum of orders
          const newePrice = neweState.orders.map((order) => {
            return (order.quantity * order.price)
          }).reduce ((sum, currVal) => {
            return sum + currVal;
          }, 0);      
          
          // update the total price state
          neweState.totalPrice = newePrice;
          
          return neweState;       
    
    
    default:
      return state;
  }
};

export default reducer;