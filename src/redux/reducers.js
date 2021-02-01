const reducers = (state = {
  text: "hiiii",
  order: {},
  language: "en"
}, action) => {

  switch (action.type) {
    case 'ADD_TO_ORDER': {
      let newOrder = {...state.order}      
      let item = action.payload
      if (item in newOrder) {        
        newOrder[item].quantity = newOrder[item].quantity + action.quantity
      } else {
        const order = {}
        order.quantity = action.quantity
        order.called = false
        newOrder[item] = order
      }
      return { ...state, order: newOrder}
    } 

    case 'REDUCE_QUANT': {
      let newOrder = {...state.order}      
      newOrder[action.payload].quantity = action.quantity - 1
      if (newOrder[action.payload].quantity === 0) {
        delete newOrder[action.payload]
      }
      return { ...state, order: newOrder}
    } 
    case 'INCREASE_QUANT': {
      let newOrder = {...state.order}      
      newOrder[action.payload].quantity = action.quantity + 1
      return { ...state, order: newOrder}
    } 
    case 'CALL_ITEM': {
      let newOrder = {...state.order}      
      newOrder[action.payload].called = true
      return { ...state, order: newOrder}
    } 
    case 'CHANGE_LANGUAGE': {
      
      return { ...state, language: action.payload}
    } 
  }

  return state
  
  };
  export default reducers;

