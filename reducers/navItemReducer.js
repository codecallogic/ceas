const initialState = {
  name: '',
  link: '',
}
export const navItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NAV_ITEM':
     return {
        ...state,
        [action.name]: action.value
      }
      break;
    
    case 'RESET_NAV_ITEM':
      return initialState
      break;
    

    default:
     return state
    }
}