const initialState = {
  previousImage: '',
  image: '',
  date: '',
  title: '',
  news: '',
  component: ''
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_NEWS':
      return {
        ...state,
        [action.name]: action.value
      }
    
    case 'RESET_NEWS':
      return initialState
    
    default:
      return state
  }
}