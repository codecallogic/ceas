const initialState = {
  previousFile: '',
  file: '',
  name: '',
  description: ''
}

export const formReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_FORM':
      return {
        ...state,
        [action.name]: action.value
      }
    
    case 'RESET_FORM':
      return initialState
    
    default:
      return state
  }
}