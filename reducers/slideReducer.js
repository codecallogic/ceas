const initialState = {
  previousImage: '',
  image: '',
  title: '',
  caption: '',
  component: ''
}

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_SLIDE':
      return {
        ...state,
        [action.name]: action.value
      }
    
    case 'RESET_SLIDE':
      return initialState
    
    default:
      return state
  }
}