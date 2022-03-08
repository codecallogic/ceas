const initialState = {
  previousImage: '',
  image: '',
  previousIcon: '',
  icon: '',
  name: '',
  leader: '',
  active: '',
  shortDescription: '',
  longDescription: ''
}

export const componentReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_COMPONENT':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'RESET_COMPONENT':
      return initialState
    
    default:
      return state
  }
}