const initialState = {
  previousImage: '',
  image: '',
  faculty: '',
  name: '',
  labLocation: '',
  description: ''
}

export const labReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_LAB':
      return {
        ...state,
        [action.name]: action.value
      }
    
    case 'RESET_LAB':
      return initialState
    
    default:
      return state
  }
}