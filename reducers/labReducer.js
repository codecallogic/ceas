const initialState = {
  previousImage: '',
  image: '',
  previousIcon: '',
  icon: '',
  faculty: '',
  name: '',
  labLocation: '',
  description: '',
  equipment: []
}

export const labReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_LAB':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'CREATE_LAB_ARRAY_ITEM':
      return {
        ...state,
        [action.name]: [...state[action.name], action.value]
      }

    case 'DELETE_LAB_ARRAY_ITEM':
      let array = [...state[action.name]]
      let newArray = array.filter((item, idx) => idx !== action.value)

      return {
        ...state,
        [action.name]: newArray
      }
    
    case 'RESET_LAB':
      return initialState
    
    default:
      return state
  }
}