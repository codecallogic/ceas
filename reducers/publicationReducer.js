const initialState = {
  previousFile: '',
  file: '',
  date: '',
  title: '',
  authors: [],
  venues: [],
  type: '',
  link: '',
  components: [],
  faculty: []
}

export const publicationReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_PUBLICATION':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'CREATE_PUBLICATION_ARRAY_ITEM':
      return {
        ...state,
        [action.name]: [...state[action.name], action.value]
      }

    case 'DELETE_PUBLICATION_ARRAY_ITEM':
      let array = [...state[action.name]]
      let newArray = array.filter((item, idx) => idx !== action.value)

      return {
        ...state,
        [action.name]: newArray
      }

    case 'RESET_PUBLICATION':
      return initialState
    
    default:
      return state
  }
}