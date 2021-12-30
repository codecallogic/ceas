const initialState = {
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  role: '',
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_ADMIN':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'RESET_ADMIN':
      return initialState
    
    default:
      return state
  }
}