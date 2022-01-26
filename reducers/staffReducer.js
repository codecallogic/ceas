const initialState = {
  previousImage: '',
  image: '',
  title: '',
  name: '',
  position: '',
  email: ''
}

export const staffReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_STAFF':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'RESET_STAFF':
      return initialState
    
    default:
      return state
  }
}