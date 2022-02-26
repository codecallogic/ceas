const initialState = {
  name: '',
  link: '',
  items: [],
  order: ''
}
export const navMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NAV_MENU':
     return {
        ...state,
        [action.name]: action.value
      }
      break;
    
    case 'RESET_NAV_MENU':
      return initialState
      break;

    case 'CREATE_NAV_MENU_ARRAY_ITEM':
      let oldArray = [...state[action.name]]
      let newArray = []

      
      
      if(oldArray.findIndex((item) => item._id == action.value._id) == -1){
        oldArray.push(action.value)
        newArray = [...oldArray]
      }else{
        newArray = oldArray.filter((item) => item._id !== action.value._id)
      }


      return {
        ...state,
        [action.name]: newArray
      }
      break;
    

    default:
     return state
    }
}