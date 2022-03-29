const initialState = {
  type:'',
  path: '',
  order: '',
  title: '',
  image: '',
  previousImage: '',
  description: '',
}
export const pageSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_SECTION':
      return {
        ...state,
        [action.name]: action.value
      }
    break;

    case 'CREATE_SECTION_ARRAY_ITEM':
      return {
        ...state,
        [action.name]: [...state[action.name], action.value]
      }

    case 'DELETE_SECTION_ARRAY_ITEM':
      let array = [...state[action.name]]
      let newArray = array.filter((item, idx) => idx !== action.value)

      return {
        ...state,
        [action.name]: newArray
      }

    case 'RESET_SECTION':
      return initialState

    default:
     return state
    }
}