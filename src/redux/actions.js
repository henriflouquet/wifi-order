export function addToOrder(item, quantity){    
    return function(dispatch){
    
      dispatch({ type: 'ADD_TO_ORDER', payload: item, quantity});
    }
}

export function reduceQuant(item, quantity){    
  return function(dispatch){
    
    dispatch({ type: 'REDUCE_QUANT', payload: item, quantity});
  }
} 

export function increaseQuant(item, quantity){    
  return function(dispatch){  
    dispatch({ type: 'INCREASE_QUANT', payload: item, quantity});
  }
} 

export function callItem(item){    
  return function(dispatch){  
    dispatch({ type: 'CALL_ITEM', payload: item});
  }
} 

export function changeLanguage(value){    
  return function(dispatch){  
    dispatch({ type: 'CHANGE_LANGUAGE', payload: value.value});
  }
} 