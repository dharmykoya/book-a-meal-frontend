export const increase = (state, foundMeal, meal) => {
  if (foundMeal) {
    state.orders.map((order) => {
      if (order.id === meal.id) {
        order.quantity += 1;
      }
    });
  } else {
    state.orders.push(meal);        
  }

  // getting the total sum of orders
  const updatedTotalPrice = Object.values(state.orders).map((order) => {
    return (order.quantity * order.price)
  }).reduce ((sum, currVal) => {
    return sum + currVal;
  }, 0);
  
  // update the total price state
  state.totalPrice = updatedTotalPrice;
  return state;
}