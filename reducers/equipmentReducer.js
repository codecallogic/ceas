const initialState = {
  previousImage: '',
  image: '',
  lab: '',
  name: '',
  description: '',
  order: ''
}

export const equipmentReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_EQUIPMENT':
      return {
        ...state,
        [action.name]: action.value
      }
    
    case 'RESET_EQUIPMENT':
      return initialState
    
    default:
      return state
  }
}